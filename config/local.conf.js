const masterConfig = require("./wdio.conf").config;

exports.config = {
    ...masterConfig,
    hostname: "localhost",
    specs: [
        './tests/*.spec.js'
    ],
    maxInstances: 10,
    capabilities: [{
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
    }],
    logLevel: 'error',
    services: ['selenium-standalone']
}
