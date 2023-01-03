const fs = require('fs');
const path = require('path');
const os = require('os');
const FTPS = require('ftps');

require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });
console.log(`NODE_ENV: ./.env.${process.env.NODE_ENV}`);

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
 *
 * NOTE!!! After the script ends, you HAVE TO MANUALLY copy/past the build/index.mc.html
 * file into your marketing cloud editor.
 */

const buildFolder = path.join(__dirname, 'out');

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
      if (err || res.error) {
        return console.log('Error on adding file:', err || res.error);
      } else {
        console.info('Successfully uploaded.');
        console.info(res.data);
      }
    });
};

const formTmpl = `
    <form method="post" action="" id="mc-form" style="display: none">
      <input placeholder="FirstName" name="FirstName" type="text" value="%%=v(@FirstName)=%%">
      <input placeholder="LastName" name="LastName" type="text" value="%%=v(@LastName)=%%">
      <input placeholder="Email" name="Email" type="email" value="%%=v(@Email)=%%">
      <input placeholder="MobilePhone" name="MobilePhone" type="tel" value="%%=v(@MobilePhone)=%%">
      <input placeholder="Birthdate" name="Birthdate" type="text" value="%%=v(@Birthdate)=%%">
    </form>
  `;

const matches = content.match(/(<form[^<]+mc-form(.|[\r\n])*form>)/);

if (matches) {
  let tokens = content.split(matches[1]);

  if (tokens.length === 2) {
    content = tokens[0] + formTmpl + tokens[1];
    console.log('Content form patched');
  } else {
    throw new Error('Found multi MC form parts');
  }
} else {
  throw new Error('Cannot resolve the MC form from the index.html file');
}

const headersTmpl = `
  <script runat="server">
  Platform.Load("Core", "1");
  try {
  </script>

  %%[

    VAR @FirstName, @LastName, @Email, @MobilePhone, @Birthdate

    SET @Contact__c = _subscriberkey */
    SET @Rows = LookupRows("ENT.Contact_Salesforce_1","Id", @Contact__c)
    SET @RowCount = rowcount(@Rows)
    SET @Row = row(@Rows, 1)

    SET @FirstName = field(@Row,"FirstName")
    SET @LastName = field(@Row,"LastName")
    SET @Email = field(@Row, "Email")
    SET @MobilePhone = field(@Row,"MobilePhone")
    SET @Birthdate = field(@Row,"Birthdate")

  ]%%

  <script runat="server">
  } catch(e) {

  }
  </script>
`;

// append header template and content
content = headersTmpl + '\n' + content;
console.log('MC header patched');

// patch version numbers
content = content.replace(/v=\d+/g, 'v=' + new Date().getTime());
console.log('version number patched');

// output to the file
fs.writeFileSync(path.join(__dirname, 'out', 'index.mc.html'), content);
console.log('content patched');

// upload the folder to FTP
let raw = fs.readFileSync(path.join(os.homedir(), '.npm-en-uploader-secret'));
let secrets = JSON.parse(raw);

let ftpSetting = secrets[ftpConfigName];
ftpSetting['remoteDir'] = ftpRemoteDir;
upload_folder(ftpSetting, buildFolder);
console.log('content uploaded');