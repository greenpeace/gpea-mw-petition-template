/**
This is a Node.js script that uses the Puppeteer library to automate
the updating of a Salesforce Marketing Cloud page's content.

What this script do:
1. Opens and controls a Chrome browser in dev mode.
2. Waits for you to manually log into OKTA. It then stores the session for future use.
3. Logs into Salesforce Marketing Cloud via OKTA.
4. Navigates to the Cloud Page as specified by the `pageName` variable (which you must update before using the script).
5. Replaces the existing content with new content from the `build/index.mc.html` file.
6. Saves and publishes the updated page.

How to use this script:
1. You need to deploy the target page to generate the index.mc.html file.
	 This can be done using a command like `npm run deploy`.
2. Update the `pageName` variable in this script to match the target CloudPage name.
	 You can find existing CloudPage names on this Google Sheet: https://bit.ly/3Ioo0ZI.
3. Run this script using the command `node puppeteer.js`.
4. If required, log into OKTA manually.
5. The script will automatically replace the existing content and publish the page.

TODO:
* Currently, this script only supports the default business unit.
	Multiple business units support is still a feature to be added
*/

const puppeteer = require('puppeteer');
const fs = require('fs');
const os = require('os');

const SESSION_FILE_PATH = 'gpokta.json';
const OKTA_URL = 'https://login.greenpeace.org/app/UserHome'

// Call the login function to start the script
async function executeOktaLogin(page) {
	if (fs.existsSync(SESSION_FILE_PATH)) { // Load session data from the file
		const sessionData = JSON.parse(fs.readFileSync(SESSION_FILE_PATH, 'utf8'));
		await page.setCookie(...sessionData.cookies); // restore the session
	}

	await page.goto(OKTA_URL);

	// Your login logic here
	console.log('Waiting to manually login')

	// Wait for the text to appear on the page
	await page.waitForFunction(() => {
		// Custom function to check if the text is present on the page
		return document.body.innerText.includes('Salesforce Marketing Cloud EA');
	}, {
		timeout: 0
	});

	// Once logged in, extract the session data
	const sessionData = {
		cookies: await page.cookies(),
	};

	// Save the session data to the file
	fs.writeFileSync(SESSION_FILE_PATH, JSON.stringify(sessionData));
	console.log(`Session successfully saved to ${SESSION_FILE_PATH}`)

	return page
}

async function waitMilliSeconds(ms) {
	await new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}


(async () => {
	try {
		let element, elements

		// Edit the CloudPageName here!!
		const targetMarket = 'TW' // "TW", "HK", "Korea"
		const targetPageName = 'donation-plastics-plastic_animal'
		// const targetPageName = 'tw-prod-1click_oneoff-landing'
		// Stop Editing

		// Perform the login process to generate new session data
		const browser = await puppeteer.launch({
			executablePath: '/usr/bin/google-chrome',// uncomment and set path if need.
			headless: false,
			args: ['--no-sandbox']
		});
		const context = await browser.defaultBrowserContext()
		let page = await context.newPage();

		// Login to Marketing Cloud via OKTA
		await executeOktaLogin(page);
		await page.goto(OKTA_URL);
		element = await page.waitForXPath("//*[contains(text(), 'Salesforce Marketing Cloud EA')]");
		await element.evaluate(e => e.click());
		await waitMilliSeconds(5 * 1000);

		// Switch to the new tab
		const pages = await browser.pages();

		for (const thisPage of pages) {
			const url = await thisPage.url();
			console.log('url', url)
			if (url.includes('exacttarget.com')) {
				page = thisPage
				console.log(`Switch to URL ${url}`)
			}
		}

		await page.bringToFront();
		await page.waitForNavigation()

		// TODO: Switch the BU
		console.log('Determine BU')

		// wait for BU menu
		console.log('Waiting for BU name appear')
		await page.waitForSelector('.mc-header-menu.mc-header-accounts .value');
		elements = await page.$$('.mc-account-switcher-name');
		for (const element of elements) {
			const text = await page.evaluate(el => el.textContent, element);
			if (text.includes(targetMarket)) {
				console.log('Switching to BU', text)
				await page.evaluate(el => el.click(), element);
				await waitMilliSeconds(3 * 1000);
			}
		}

		// wait changing BU, wait the target el contains the given text
		console.log('Waiting target market name shows on the menu')
		await page.waitForFunction(
			(selector, targetMarket) => {
				const element = document.querySelector(selector);
				return element && element.textContent.includes(targetMarket);
			},
			{},
			'.mc-header-menu.mc-header-accounts .value',
			targetMarket
		);

		// resole the current BizUnit name
		// await page.waitForSelector('.mc-header-menu.mc-header-accounts .value');
		element = await page.$('.mc-header-menu.mc-header-accounts .value');
		let currentBizUnitName = await page.evaluate(element => element.innerText, element);
		console.log('Current BU', currentBizUnitName);


		// Load CloudPages
		console.log('Load Cloud Page URL')
		await page.goto('https://mc.s50.exacttarget.com/cloud/#app/CloudPages/')
		await waitMilliSeconds(10 * 1000);

		console.log('Waiting the Cloud Page Panel to show')
		await page.waitForSelector('.mc-canvas-region iframe.mc-app-iframe')
		let iframeElement = await page.$('.mc-canvas-region iframe.mc-app-iframe');
		let frame = await iframeElement.contentFrame();

		await frame.waitForSelector('div.cp-home-content')

		console.log('Switch to landing page menu')
		await frame.click('div.cp-home-content > div.left-col > nav > div > ul > li:nth-child(2)')

		// show 1000 results per page
		console.log('Expand to 1000 results to show all the pages')
		await frame.waitForSelector('#pageSizeDropdownBTN')
		await frame.click('#pageSizeDropdownBTN')
		await frame.waitForSelector('#landingPagesPager-item-4')
		await frame.click('#landingPagesPager-item-4')

		console.log('Waiting load page list')
		await frame.waitForSelector('.slds-box.cp-item.published', {timeout: 60*1000});

		// switch to the target page
		const [elementHandle] = await frame.$x(`//span[text()="${targetPageName}"]`);
		if ( !elementHandle) {
			throw new Error(`Cannot find the page "${targetPageName}" in Market "${targetMarket}"`)
		}
		await elementHandle.evaluate(e => e.click());

		console.log('Waiting the editor panel load')
		await waitMilliSeconds(10 * 1000);
		await frame.waitForSelector('iframe[src*="https://content-builder"]');
		let editorIframEl = await frame.$('div.cp-editor-container iframe.undefined');
		let editorFrame = await editorIframEl.contentFrame();

		await editorFrame.waitForSelector('.gearpicker-handle-icon-outline');
		await editorFrame.waitForSelector('.cloud-editor-workspace-toolbar a[data-view="html"]');
		await waitMilliSeconds(3 * 1000);

		// Switch to Code View
		// i don't know where the element located, so click all the element with text Code View.
		elements = await editorFrame.$$('*'); // Get all elements on the page
		for (const element of elements) {
			const textContent = await editorFrame.evaluate(el => el.textContent, element);
			if (textContent.includes('Code View')) {
				await element.evaluate(e => e.click());
			}
		}

		console.log("Deleting the existing content")
		await editorFrame.click('div.CodeMirror-code > div:nth-child(1)')
		if (os.platform() === 'darwin') {
			await page.keyboard.down('Meta');
			await page.keyboard.press('KeyA'); // Select all text
			await page.keyboard.up('Meta');
			await page.keyboard.press('Backspace'); // Delete the selected text
		} else {
			await page.keyboard.down('Control');
			await page.keyboard.press('KeyA'); // Select all text
			await page.keyboard.up('Control');
			await page.keyboard.press('Backspace'); // Delete the selected text
		}
		await waitMilliSeconds(1 * 1000);

		// Add the new content
		const fileContent = fs.readFileSync('out/index.mc.html', 'utf8');
		await page.keyboard.sendCharacter(fileContent + '  ');

		// do save
		frame.click('#page-save')
		await waitMilliSeconds(1 * 1000);

		// wait saved
		console.log('Waiting save')
		await frame.waitForFunction(() => {
			const element = document.querySelector('#page-save');
			return element && element.textContent === 'Save';
		});


		// do publish
		console.log('Going to publish')
		frame.click('#page-publish')
		await waitMilliSeconds(2 * 1000);

		console.log('Waiting publish confirm page')
		await frame.waitForFunction(() => {
			const element = document.querySelector('#publish');
			return element && !element.disabled;
		});
		frame.click('#publish') // confirm publish

		console.log(`Waiting for ${targetPageName} publishing successfully`)
		await frame.waitForFunction(() => {
			return document.body.innerText.includes('was published successfully.');
		});


		console.log('Finished !!!')

		await waitMilliSeconds(5 * 1000);
		browser.close()
	} catch (error) {
		throw error
	}

	return
})();