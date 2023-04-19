const parentConfig = require("./main.conf").config;

exports.config = {
    ...parentConfig,
    hostname: "localhost",
    specs: [
        "../tests/*.spec.js"
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
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: "error",
    services: ["chromedriver"],
    // Waits 20 seconds for page load or elements to appear before failing
    waitforTimeout: 20000
};
