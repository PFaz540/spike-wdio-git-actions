import merge from 'deepmerge'
import wdioConf from "./main.conf";

exports.config = merge(wdioConf.config, {
    hostname: process.env.HUB_HOST,
    specs: [
        "./tests/*.spec.js"
    ],
    maxInstances: 1,
    capabilities: [
        {
            hostname: process.env.HUB_HOST,
            "browserName": "chrome",
            "goog:chromeOptions": {
                "args": [
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                    "--headless",
                    "--disable-gpu",
                    "--disable-infobars",
                    "--disable-browser-side-navigation",
                    "--window-size=1920,1080",
                ]
            }
        }
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "error",
    services: [],
    reporters: [
        "spec",
        ["allure", {
            // Defaults to ./allure-results. 
            // After a test run is complete, you will find that this directory has been populated with an .xml file for each spec, plus a number of .txt and .png files and other attachments.
            outputDir: "./allure-results",
            // Optional parameter(false by default), shows all the Selenium API Call/Actions in the report.
            disableWebdriverStepsReporting: true,
            // Optional parameter(false by default), do NOT attach screenshots to the reporter.
            // false = Yes, attach
            // true = Don"t attach
            disableWebdriverScreenshotsReporting: false,
            // Optional parameter (false by default), if true this will
            disableMochaHooks: false,
            // Optional parameter(false by default), set to true in order to attach console logs from step to the reporter.
            addConsoleLogs: true
        }]
    ],
    // Waits 20 seconds for page load or elements to appear before failing
    waitforTimeout: 20000
});
