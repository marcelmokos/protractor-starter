//noinspection JSUnusedGlobalSymbols
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

exports.config = {
  framework: "jasmine2",
  specs: ["spec/**/*.spec.js"],
  directConnect: true,
  chromeDriver: "node_modules/chromedriver/lib/chromedriver/chromedriver",
  jasmineNodeOpts: {
    // remove ugly protractor dot reporter
    print: function () {},
  },
  onPrepare: function () {
    require("babel-core/register");

    /**
     * If you are testing against a non-angular site - set ignoreSynchronization setting to true
     *
     * If true, Protractor will not attempt to synchronize with the page before
     * performing actions. This can be harmful because Protractor will not wait
     * until $timeouts and $http calls have been processed, which can cause
     * tests to become flaky. This should be used only when necessary, such as
     * when a page continuously polls an API using $timeout.
     *
     * @type {boolean}
     */
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
          displaySuccessesSummary: false, // display summary of all successes after execution
          displayFailuresSummary: false,  // display summary of all failures after execution
          displayPendingSummary: false,   // display summary of all pending specs after execution

          displayPendingSpec: true,       // display each pending spec
          displaySpecDuration: true,      // display each spec duration
          displaySuiteNumber: true,       // display each suite number (hierarchical)
        },
      })
    );
  },
  capabilities: {
    browserName: "chrome",
  },
};
