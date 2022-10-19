exports.config = {
    hostname: process.env.HUB_HOST,
    specs: [
        './tests/*.spec.js'
    ],
    maxInstances: 10,
    capabilities: [{
        hostname: process.env.HUB_HOST,
        browserName: "firefox",
        acceptInsecureCerts: true,
        "moz:firefoxOptions": {
            "args": [
                "--headless",
                "-width=1920",
                "-height=1080"
            ]
        }
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'trace',
    bail: 0,
    baseUrl: 'https://www.gear4music.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
    reporters: [
        'spec',
        ['junit', {
            outputDir: './reports',
            outputFileFormat: function (options) { // optional
                return `wdio-report-${options.cid}.xml`
            }
        }],
        ['allure', {
            // Defaults to ./allure-results. After a test run is complete, you will find that this directory has been populated with an .xml file for each spec, plus a number of .txt and .png files and other attachments.
            outputDir: './allure-results',
            // Optional parameter(false by default), shows all the Selenium API Call/Actions in the report.
            disableWebdriverStepsReporting: true,
            // Optional parameter(false by default), do NOT attach screenshots to the reporter.
            // false = Yes, attach
            // true = Don't attach
            disableWebdriverScreenshotsReporting: false,
            // Optional parameter (false by default), if true this will
            disableMochaHooks: false,
            // Optional parameter(false by default), set to true in order to attach console logs from step to the reporter.
            addConsoleLogs: true
        }]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterStep: async ({ error }) => {
        if (error) {
            await browser.takeScreenshot("./screenshots");
        }
    }
}
