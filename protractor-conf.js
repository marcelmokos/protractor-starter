// noinspection JSUnusedGlobalSymbols
import { SpecReporter } from "jasmine-spec-reporter";

export const config = {
  framework: "jasmine2",
  specs: ["spec/**/*.spec.js"],
  directConnect: true,
  chromeDriver: "node_modules/.bin/chromedriver",
  jasmineNodeOpts: {
    // remove ugly protractor dot reporter
    print: () => { },
  },
  onPrepare: () => {
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
        // Defaults: https://github.com/bcaudan/jasmine-spec-reporter#default-options
        // Configuration: https://github.com/bcaudan/jasmine-spec-reporter/blob/master/src/configuration.ts
        suite: {
          displayNumber: true,    // display each suite number (hierarchical)
        },
        spec: {
          displaySuccessful: true,
          displayPending: true,   // display each pending spec
          displayDuration: true,  // display each spec duration
        },
        summary: {
          displaySuccessful: false, // display summary of all successes after execution
          displayFailed: true,    // display summary of all failures after execution
          displayPending: false,   // display summary of all pending specs after execution
          displayDuration: true,
        },
      }),
    );
  },
  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
    creatix: 'spec/creatix/*.spec.js',
    homepage: 'spec/**/Homepage.spec.js',
  },
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      // http://peter.sh/experiments/chromium-command-line-switches/#test-type
      args: ["--test-type"],
      // https://github.com/angular/protractor/blob/master/docs/browser-setup.md#using-headless-chrome
      // args: ["--headless", "--disable-gpu", "--window-size=800x600"],
    },
  },
};
