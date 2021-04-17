module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@Components": "./src/Components",
          "@Domains": "./src/Domains",
          "@Stories": "./src/Stories",
          "@Config": "./src/Config",
          "@Redux": "./src/Redux",
          "@Modules": "./src/Domains/Fasting/modules",
          "@Navigation": "./src/Domains/Fasting/navigation",
          "@ADMModules": "./src/Domains/FastingAdm/modules",
          "@ADMNavigation": "./src/Domains/FastingAdm/navigation"
        }
      }
    ],
    ["@babel/plugin-proposal-decorators", { "legacy": true}],
    "import-graphql"
  ]
};