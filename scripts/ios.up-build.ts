const plist = require('simple-plist');
const util = require('util');

let data;
let plistPatch;
const schemeArgsIndex = 2;
const { argv = [] } = process || {};
const schemeArgs = argv[schemeArgsIndex];
const schemeName = schemeArgs == 'fas' ? 'FASTING' : 'FASTING-ADM'

if (schemeArgs == 'fas') plistPatch = 'ios/App/Fasting.plist';
else plistPatch = 'ios/App/FastingAdm.plist';

if (schemeArgs == 'fas') data = plist.readFileSync(plistPatch);
else data = plist.readFileSync(plistPatch);

// ===
console.log(`[SCRIPTS][EDIT-PLIST-BUILD]`);
console.log(`[SCRIPTS][SCHEME-NAME][${schemeName}]`);
console.log(util.inspect(data, false, null, true));

if (data) {
  console.log(`[SCRIPTS][SCHEME-NAME][${schemeName}][CURRENT-VERSION]`, data.CFBundleShortVersionString);
  console.log(`[SCRIPTS][SCHEME-NAME][${schemeName}]:[CURRENT-BUILD]`, data.CFBundleVersion);

  // Change version Number
  data.CFBundleVersion = `${parseInt(data.CFBundleVersion) + 1}`;

  // Set new Values
  plist.writeFile(plistPatch, data, err => {
    if (err) throw err;
    console.log(`[SCRIPTS][SCHEME-NAME][${schemeName}]:[NEXT-BUILD]`, data.CFBundleVersion);
  })
}


export { }