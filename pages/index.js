import React, { useEffect } from 'react';
import Wrapper from '@containers/wrapper';
import dynamic from 'next/dynamic';
import axios from 'axios';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { stringify } from 'qs';
import * as themeActions from 'store/actions/action-types/theme-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';

import {
	hkDevTagManagerArgs,
	twDevTagManagerArgs,
	hkTagManagerArgs,
	twTagManagerArgs
} from '@common/constants/tagManagerArgs';

/* Determine the returned project index by env variable */
const DynamicComponent = dynamic(() => import(`apps/${process.env.project}`));

/* Get env variables */
const envProjectName = process.env.projectName;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;
const signupNumbersHKURL = process.env.signupNumbersHK;
const signupNumbersTWURL = process.env.signupNumbersTW;

// Pending
const schemaEndpoint = `${themeEndpointURL}?q={"Market":${envProjectMarket}`;

const initTagManager = (marketName) => {
	if (process.env.NODE_ENV === 'production') {
		switch (marketName) {
			case 'HK':
				TagManager.initialize(hkTagManagerArgs);
				break;
			case 'TW':
				TagManager.initialize(twTagManagerArgs);
			default:
				break;
		}
	}
	/* else {
	switch (marketName) {
	  case 'HK':
		TagManager.initialize(hkDevTagManagerArgs);
		break;
	  case 'TW':
		TagManager.initialize(twDevTagManagerArgs);
		break;
	  default:
		break;
	}
  } */
};

function Index({
	setTheme,
	themeData,
	strapi,
	setSignupNumbers,
	setWebStatus,
	setSignFormData
}) {
	const router = useRouter();
	const dispatch = useDispatch();

	/* Set dynamic theme parameters */
	useEffect(() => {
		if (router.isReady) {
			/* Cater these query parameters */
			const {
				page,
				step,
				campaignId,
				donation_module_campaign,
				headline_prefix,
				hero_image_desktop,
				hero_image_mobile
			} = router.query;

			/* page=2 force to result page */
			if (page === '2') {
				setWebStatus(true);
			}

			dispatch({ type: signupActions.SET_STEP, data: step ?? 'default' });
			dispatch({
				type: themeActions.SET_PARAMS,
				data: {
					campaignId,
					donation_module_campaign,
					headline_prefix,
					hero_image_desktop,
					hero_image_mobile
				}
			});

			if (!!strapi) {
				//use default value, if strapi data not found
				console.log('Dispatch');
				dispatch({ type: themeActions.SET_STRAPI_DATA, data: strapi });
			}
		}
	}, [router]);

	/** Fetch signup data on load */
	useEffect(() => {
		async function fetchSignupData() {
			const fetchURLs = {
				hk: signupNumbersHKURL,
				tw: signupNumbersTWURL
			};

			const signupData = await axios
				.get(fetchURLs[themeData?.Market])
				.then((response) => {
					return response.data.find((d) => d.Id === themeData?.CampaignId);
				})
				.catch((error) => console.log(error));

			setSignupNumbers({ [themeData?.Market]: signupData });
		}
		fetchSignupData();
	}, []);

	/* Set parameters to hiddenForm data */
	useEffect(() => {
		let params = {};

		window.location.search
			.slice(1)
			.split('&')
			.forEach((elm) => {
				if (elm === '') return;
				let spl = elm.split('=');
				const d = decodeURIComponent;
				params[d(spl[0])] = spl.length >= 2 ? d(spl[1]) : true;
			});

		dispatch({
			type: hiddenFormActions.SET_HIDDEN_FORM,
			data: params
		});
	}, []);

	/* Pre-fill signup data */
	useEffect(() => {
		const domain = document.location.host;
		const market =
			themeData?.Market?.toUpperCase() ||
			(strapi?.market?.data?.attributes?.market === 'Hong Kong'
				? 'HK'
				: 'TW') ||
			(domain.indexOf('hk') > 0
				? 'HK'
				: domain.indexOf('tw') > 0
					? 'TW'
					: '');
		/* GTM is only applicable for production env */
		initTagManager(market);
		setTheme(themeData);

		let FormObj = {};
		const selectForm = document.forms['mc-form'];
		const documentFormsArray = Array.from(selectForm);
		if (documentFormsArray) {
			documentFormsArray.map((data) => {
				// missing default value in field
				if (!data.defaultValue) {
					return;
				}
				// format MobilePhone and CountryCode field
				if (data.name === 'MobilePhone') {
					FormObj['MobileCountryCode'] = data.defaultValue
						?.split(' ')[0]
						.replace('+', '');
					FormObj['MobilePhone'] = data.defaultValue?.split(' ')[1];
					return;
				}
				// format Birthdate field
				if (data.name === 'Birthdate') {
					FormObj['Birthdate'] = `${data.defaultValue
						?.split('/')[2]
						.substring(0, 4)}-01-01`;
					return;
				}
				// other normal field
				FormObj[`${data.name}`] = data.defaultValue ?? '';
			});

			setSignFormData(FormObj);
		}
	}, [themeData]);

	useEffect(() => {
		window.addEventListener(
			'message',
			(event) => {
				if (event.data === 'donate-complete') {
					if (window !== undefined) {
						console.log(
							`donation module step: ${window.__greenpeace__.currentStep}.`
						);
						window?.__greenpeace__?.currentStep >= 3 && setWebStatus(true);
					}
				}
			},
			false
		);
	});

	return <DynamicComponent strapi={strapi} themeData={themeData} />;
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

const mapDispatchToProps = (dispatch) => {
	return {
		setTheme: (data) => {
			dispatch({ type: themeActions.SET_THEME, data });
		},
		setSignupNumbers: (data) => {
			dispatch({ type: formActions.SET_SIGNUP_NUMBERS, data });
		},
		setWebStatus: (bol) => {
			dispatch({ type: statusActions.SET_FORM_SUBMITTED, data: bol });
		},
		setSignFormData: (data) => {
			dispatch({ type: signupActions.SET_SIGN_UP_FORM_DATA, data });
		}
	};
};

export async function getStaticProps(context) {
	const singleResult = await axios
		.get(themeEndpointURL)
		.then((response) => {
			return response.data.records.find(
				(d) => d.ProjectName === envProjectName && d.Market === envProjectMarket
			);
		})
		.catch((error) => console.log(error));

	console.log('Building from ' + envProjectMarket + ':' + envProjectName);

	!singleResult && console.warn('PROJECT NAME NOT FOUND');

	const app = envProjectName ?? '';

	const endpoint = 'https://strapi.small-service.gpeastasia.org/api';

	// for the populate levels, see https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#component-dynamic-zones
	// populate=%2A means only one level deep (populate=deep means populate all the levels, generally it's the whole DB)

	const query = stringify({
		filters: {
			market: { slug: envProjectMarket },
			campaign: app
		},
		populate: {
			'contentBlocks': {
				populate: [
					'CardSlider.image',
					'TestimonialSlider.avatar',
					'CarouselSlider.image',
				]
			},
			'contentHero': { populate: '*' },
			'issue': { populate: { filters: { name: { $neq: 'pages' } } } },
			'market': { populate: { filters: { name: { $neq: 'pages' } } } },
			'page_type': { populate: { filters: { name: { $neq: 'pages' } } } },
			'seo': { populate: '*' },
			'thankyouBlocks': { populate: '*' },
			'thankyouHero': { populate: '*' }
		}
	}, {
		encodeValuesOnly: true, // prettify URL
	});

	const res = await fetch(`${endpoint}/pages?${query}`)
		.then((response) => response);
	const themes = await res.json();
	const theme =
		themes?.data[0] !== undefined ? themes?.data[0]?.attributes : null;

	return {
		props: {
			themeData: singleResult || {},
			strapi: theme
		}
	};
}

export default connect(null, mapDispatchToProps)(Index);
