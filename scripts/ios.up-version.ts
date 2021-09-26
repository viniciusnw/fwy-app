const editJsonFile = require("edit-json-file");
const plist = require('simple-plist');
const util = require('util');

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

let data = plist.readFileSync(plistPatch);

// ===
console.log(`[SCRIPTS][EDIT-PLIST-VERSION]`);
console.log(`[SCRIPTS][SCHEME-NAME][${schemeName}]`);
console.log(util.inspect(data, false, null, true));

if (data) {
  console.log(`[SCRIPTS][SCHEME-NAME][${schemeName}][CURRENT-VERSION]`, data.CFBundleShortVersionString);

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

  // 
  // Save and Set new Values
  data.CFBundleVersion = '1'
  data.CFBundleShortVersionString = nextVersion;

  if (schemeArgs == 'fas')
    jsonFile.set("version", `${nextVersion}`);
  else
    jsonFile.set("admVersion", `${nextVersion}`);

  plist.writeFile(plistPatch, data, err => {
    if (err) throw err;
    console.log(`[SCRIPTS][SCHEME-NAME][${schemeName}][NEXT-VERSION]`, data.CFBundleShortVersionString);
  })
}


export { }