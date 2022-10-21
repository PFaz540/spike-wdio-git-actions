const masterConfig = require("./ci.conf").config;

exports.config = {
    ...masterConfig,
    hostname: "localhost",
    specs: [
        './tests/*.spec.js'
    ],
    maxInstances: 10,
    capabilities: [
        {
            hostname: "localhost",
            browserName: "firefox",
            acceptInsecureCerts: true,
            "moz:firefoxOptions": {
                "args": [
                    "--headless",
                    "-width=1920",
                    "-height=1080"
                ]
            }
        },
        // {
        //     hostname: process.env.HUB_HOST,
        //     browserName: "chrome",
        //     acceptInsecureCerts: true,
        //     "goog:chromeOptions": {
        //         "args": [
        //             "--no-sandbox",
        //             // "--disable-infobars",
        //             "--headless",
        //             // "--disable-gpu",
        //             "--disable-dev-shm-usage",
        //             // "--window-size=1920,1080",
        //         ]
        //     }
        // }
    ],
    logLevel: 'error',
    services: ['selenium-standalone']
}
