const { defineConfig } = require("cypress");
const {
  addMatchImageSnapshotPlugin,
} = require("cypress-image-snapshot/plugin");
const cucumber = require('cypress-cucumber-preprocessor').default


module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
  on('file:preprocessor', cucumber())
  // save all test results as a JSON file
  require('cypress-json-results')({
    on,
    filename: 'results.json', // default filename
  })
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/web/index.php/auth",
  },
});
