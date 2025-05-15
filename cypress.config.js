//const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
//   env:{
//     URL:'https://m2-staging.brandalley.co.uk/'
//   }
// });


const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-web-security');
          launchOptions.args.push('--user-data-dir=/tmp/chrome_dev');
          return launchOptions;
        }
      });
    },
  },
  env: {
    URL: 'https://m2-staging.brandalley.co.uk/'
  }
});


