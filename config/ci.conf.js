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
        ["junit", {
            outputDir: "./reports",
            outputFileFormat: function () { // optional
                return `report-${Date.now()}.xml`
            }
        }]
    ],
    // Waits 20 seconds for page load or elements to appear before failing
    waitforTimeout: 20000
});
