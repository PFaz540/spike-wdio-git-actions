import merge from 'deepmerge'
import wdioConf from "./main.conf";

exports.config = merge(wdioConf.config, {
    hostname: "localhost",
    specs: [
        "./tests/*.spec.js"
    ],
    maxInstances: 1,
    capabilities: [
        {
            browserName: "chrome",
            acceptInsecureCerts: true,
            "goog:chromeOptions": {
                "args": [
                    // "--headless",
                    "--window-size=1920,1080",
                ]
            }
        }
    ],
    logLevel: "error",
    services: ["selenium-standalone"],
    // Waits 20 seconds for page load or elements to appear before failing
    waitforTimeout: 20000
});
