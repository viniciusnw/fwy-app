const editJsonFile = require("edit-json-file");
const plist = require('simple-plist');
const util = require('util');

let data;
let plistPatch;
const { argv = [] } = process || {};
const versionNumberArgsIndex = 3;
const schemeArgsIndex = 2;
const schemeArgs = argv[schemeArgsIndex];
const schemeName = schemeArgs == 'fas' ? 'FASTING' : 'FASTING-ADM';
const jsonFile = editJsonFile('package.json', {
  autosave: true
});

if (schemeArgs == 'fas') plistPatch = 'ios/App/Fasting.plist';
else plistPatch = 'ios/App/FastingAdm.plist';

if (schemeArgs == 'fas') data = plist.readFileSync(plistPatch);
else data = plist.readFileSync(plistPatch);

// ===
console.log(`[SCRIPTS][EDIT-PLIST-VERSION][${schemeName}]`);
console.log(util.inspect(data, false, null, true));

if (data) {
  console.log(`[SCRIPTS][EDIT-PLIST-VERSION][${schemeName}][CURRENT-VERSION]`, data.CFBundleShortVersionString);

  let versionNumberArrayIndex;
  switch (argv[versionNumberArgsIndex]) {
    case 'patch':
      versionNumberArrayIndex = 2;
      break;
    case 'minor':
      versionNumberArrayIndex = 1;
      break;
    case 'major':
      versionNumberArrayIndex = 0;
      break;
  }

  // Change version Number
  const versionNumberArray = data.CFBundleShortVersionString.split('.');
  versionNumberArray[versionNumberArrayIndex] = parseInt(versionNumberArray[versionNumberArrayIndex]) + 1;
  const nextVersion = versionNumberArray.join('.');
  data.CFBundleShortVersionString = nextVersion;
  
  // Set new Values
  jsonFile.set("version", `${nextVersion}`);
  plist.writeFile(plistPatch, data, err => {
    if (err) throw err;
    console.log(`[SCRIPTS][EDIT-PLIST-VERSION][${schemeName}][NEXT-VERSION]`, data.CFBundleShortVersionString);
  })
}


export { }