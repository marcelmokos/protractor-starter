//noinspection JSUnusedGlobalSymbols
exports.config = {
  framework: "jasmine",
  specs: ["spec/**/*.spec.js"],
  directConnect: true,
  chromeDriver: "node_modules/chromedriver/lib/chromedriver/chromedriver",
  jasmineNodeOpts: {
    // remove ugly protractor dot reporter
    print: function () {}
  },
  onPrepare: function () {
    require("babel-core/register"); // eslint-disable-line

    browser.ignoreSynchronization = true;

    const env = jasmine.getEnv();
    const SpecReporter = require("jasmine-spec-reporter");

    env.addReporter(
      new SpecReporter({

        // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
        displaySuccessesSummary: false, // display summary of all successes after execution
        displayFailuresSummary: false,  // display summary of all failures after execution
        displayPendingSummary: false,   // display summary of all pending specs after execution

        displayPendingSpec: true,       // display each pending spec
        displaySpecDuration: true,      // display each spec duration
        displaySuiteNumber: true        // display each suite number (hierarchical)
      })
    );
  },
  capabilities: {
    browserName: "chrome"
  },
};
