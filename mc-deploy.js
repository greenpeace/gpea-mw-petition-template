const fs = require('fs');
const path = require('path');
const os = require('os');
const FTPS = require('ftps');

require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });
console.log(`./.env.${process.env.NODE_ENV}`);

/*
Install the dependencies first
*/

/**
 * This file is a temporary script to replace gpea-npm-en-uploader
 * since we are migrating to mc. It's not fully automated. It still need
 * some manually work.
 *
 * What it does:
 *
 * 1. Replace the MC form with its server side format.
 * 2. Append the server side logic at the frontend of html file.
 * 3. Replace the versiob with timestamps. ex v=123 to v=12325345346
 * 4. Upload the asset to FTP.
 *
 *
 * Usage:
 *
 * at this line to your package.json
 * ```
 * "deploy-mc": "yarn run build:en && node mc-deploy.js"
 * ```
 *
 * and run `yarn deploy-mc` in your terminal.
 *
 *
 * NOTE!!! After the script ends, you HAVE TO MANUALLY copy/past the build/index.mc.html
 * file into your marketing cloud editor.
 */

// definitions
const buildFolder = path.join(__dirname, 'out');

// New websign endpoint can accept optional fields
// const EndpointURL = '';
// const CampaignId = '';
// const interests = ['']; // Arctic, Climate, Forest, Health, Oceans, Plastics
// const ftpConfigName = ''; // refer to ~/.npm-en-uploader-secret
// const ftpRemoteDir = '';
// * Local configs are Depreciated
// * Get configs from env
const ftpRemoteDir = process.env.BASEPATH;
const ftpConfigName = process.env.FTP_CONFIG_NAME;

console.log(`\`${ftpRemoteDir}:\`${ftpConfigName}\`}`);

let indexHtmlFilePath = path.join(buildFolder, 'index.html');
let fbuf = fs.readFileSync(indexHtmlFilePath);
let content = fbuf.toString();

// copied from https://github.com/greenpeace/gpea-npm-en-uploader/blob/master/upload_folder.js
/**
 * Use lftp to sync local dir to remote
 *
 * @param  {object} settings
 * @param  {string} localDir Local folder to update
 * @param  {string} remoteDir The remote path to upload. If it's not exist, it will be created.
 */
const upload_folder = function (settings, localDir) {
  // @see https://github.com/Atinux/node-ftps for arguments
  var ftps = new FTPS(settings);

  console.info(
    `Sync from \`${localDir}\` to \`${settings.protocol}://${settings.username}@${settings.host}:${settings.remoteDir}\``,
  );

  return ftps
    .mirror({
      localDir: localDir,
      remoteDir: settings.remoteDir,
      upload: true,
    })
    .cd(settings.remoteDir)
    .ls()
    .exec(function (err, res) {
      // err will be null (to respect async convention)
      // res is an hash with { error: stderr || null, data: stdout }
      if (err) {
        console.error(err);
      } else {
        console.info('Successfully uploaded.');
        console.info(res.data);
      }
    });
};

// patch form contents
// let formTmpl = `<form method="post" action="%%=v(@EndpointURL)=%%" id="mc-form" style="display: none">
//       <input placeholder="FirstName" name="FirstName" type="text" value="">
//       <input placeholder="LastName" name="LastName" type="text" value="">
//       <input placeholder="Email" name="Email" type="email" value="">
//       <input placeholder="MobileCountryCode" name="MobileCountryCode" type="text">
//       <input placeholder="MobilePhone" name="MobilePhone" type="tel" value="">
//       <input placeholder="Birthdate" name="Birthdate" type="text" value="">
//       <input placeholder="OptIn" name="OptIn" type="checkbox" value="">

//       <input type="hidden" name="req" value="post_data">
//       <input type="hidden" name="LeadSource" value="%%=v(@LeadSource)=%%">
//       <input type="hidden" name="Petition_Interested_In_Arctic__c" value="%%=v(@Petition_Interested_In_Arctic__c)=%%">
//       <input type="hidden" name="Petition_Interested_In_Climate__c" value="%%=v(@Petition_Interested_In_Climate__c)=%%">
//       <input type="hidden" name="Petition_Interested_In_Forest__c" value="%%=v(@Petition_Interested_In_Forest__c)=%%">
//       <input type="hidden" name="Petition_Interested_In_Health__c" value="%%=v(@Petition_Interested_In_Health__c)=%%">
//       <input type="hidden" name="Petition_Interested_In_Oceans__c" value="%%=v(@Petition_Interested_In_Oceans__c)=%%">
//       <input type="hidden" name="Petition_Interested_In_Plastics__c" value="%%=v(@Petition_Interested_In_Plastics__c)=%%">
//       <input type="hidden" name="CampaignId" value="%%=v(@CampaignId)=%%">
//       <input type="hidden" name="UtmMedium" value="%%=v(@UtmMedium)=%%">
//       <input type="hidden" name="UtmSource" value="%%=v(@UtmSource)=%%">
//       <input type="hidden" name="UtmCampaign" value="%%=v(@UtmCampaign)=%%">
//       <input type="hidden" name="UtmContent" value="%%=v(@UtmContent)=%%">
//       <input type="hidden" name="UtmTerm" value="%%=v(@UtmTerm)=%%">
//       <input type="hidden" name="CampaignData1__c" value="" />
//       <input type="hidden" name="CampaignData2__c" value="" />
//       <input type="hidden" name="CampaignData3__c" value="" />
//       <input type="hidden" name="CampaignData4__c" value="" />
//       <input type="hidden" name="CampaignData5__c" value="" />
//       <input type="hidden" name="numSignupTarget" value="%%=v(@Petition_Signup_Target__c)=%%">
//       <input type="hidden" name="numResponses" value="%%=v(@NumberOfResponses)=%%">
//     </form>
//   `;

// let matches = content.match(/(<form[^<]+mc-form(.|[\r\n])*form>)/);

// if (matches) {
//   let tokens = content.split(matches[1]);

//   if (tokens.length === 2) {
//     content = tokens[0] + formTmpl + tokens[1];
//     console.log('Content form patched');
//   } else {
//     throw new Error('Found multi MC form parts');
//   }
// } else {
//   throw new Error('Cannot resolve the MC form from the index.html file');
// }

// // append the headers
// let headersTmpl = `%%[
//     VAR @UtmMedium, @UtmSource, @UtmCampaign, @UtmContent, @UtmTerm, @LeadSource, @PetitionIssueType, @CampaignId, @DonationPageUrl

//     /*Set these params when creating a new petition page, for each core interest of the petition set the value to "true" to update the supporters CRM profile otherwise leave the value blank or with false value */

//     SET @EndpointURL = "${EndpointURL}"
//     SET @CampaignId = "${CampaignId}"
//     SET @LeadSource = "Petition - ${interests.join(',')}"
//     SET @Petition_Interested_In_Arctic__c       = "${
//       interests.indexOf('Arctic') >= 0 ? 'true' : 'false'
//     }"
//     SET @Petition_Interested_In_Climate__c      = "${
//       interests.indexOf('Climate') >= 0 ? 'true' : 'false'
//     }"
//     SET @Petition_Interested_In_Forest__c       = "${
//       interests.indexOf('Forest') >= 0 ? 'true' : 'false'
//     }"
//     SET @Petition_Interested_In_Health__c       = "${
//       interests.indexOf('Health') >= 0 ? 'true' : 'false'
//     }"
//     SET @Petition_Interested_In_Oceans__c       = "${
//       interests.indexOf('Oceans') >= 0 ? 'true' : 'false'
//     }"
//     SET @Petition_Interested_In_Plastics__c     = "${
//       interests.indexOf('Plastics') >= 0 ? 'true' : 'false'
//     }"

//     /**** Retreive number of responses in campaign used for any petition where petition sign up progress bar is needed to display signups compared to targeted number of signups ****/
//     SET @Rows = LookupRows("ENT.Campaign_Salesforce","Id", @CampaignId)
//     IF RowCount(@Rows) > 0 THEN
//       SET @CampaignRow = Row(@Rows, 1)
//       SET @NumberOfContacts = Field(@CampaignRow, "NumberOfContacts")
//       SET @NumberOfLeads = Field(@CampaignRow, "NumberOfLeads")
//       SET @NumberOfResponses = ADD(@NumberOfContacts, @NumberOfLeads)
//       SET @Petition_Signup_Target__c = Field(@CampaignRow, "Petition_Signup_Target__c")
//     ENDIF

//     /* UTM Tracking Params */
//     SET @UtmMedium          = RequestParameter("utm_medium")
//     SET @UtmSource          = RequestParameter("utm_source")
//     SET @UtmCampaign        = RequestParameter("utm_campaign")
//     SET @UtmContent         = RequestParameter("utm_content")
//     SET @UtmTerm            = RequestParameter("utm_term")
//   ]%%
//   `;

// content = headersTmpl + '\n' + content;
// console.log('MC header patched');

// // patch version numbers
// content = content.replace(/v=\d+/g, 'v=' + new Date().getTime());
// console.log('version number patched');

// // output to the file
// fs.writeFileSync(path.join(__dirname, 'build', 'index.mc.html'), content);
// console.log('content patched');

// upload the folder to FTP
let raw = fs.readFileSync(path.join(os.homedir(), '.npm-en-uploader-secret'));
let secrets = JSON.parse(raw);

let ftpSetting = secrets[ftpConfigName];
ftpSetting['remoteDir'] = ftpRemoteDir;
upload_folder(ftpSetting, buildFolder);
