const masterConfig = require("./ci.conf").config;

exports.config = {
    ...masterConfig,
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
    services: ["selenium-standalone"]
}
