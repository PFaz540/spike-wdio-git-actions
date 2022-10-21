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
            hostname: process.env.HUB_HOST,
            browserName: "chrome",
            acceptInsecureCerts: true,
            "goog:chromeOptions": {
                "args": [
                    "--no-sandbox",
                    "--disable-infobars",
                    "--headless",
                    "--disable-gpu",
                    "--disable-dev-shm-usage",
                    "--window-size=1920,1080",
                ]
            }
        }
    ],
    logLevel: "error",
    services: ["selenium-standalone"]
}
