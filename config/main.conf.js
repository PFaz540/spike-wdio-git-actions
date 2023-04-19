exports.config = {
   specs: [
      "../tests/*.spec.js"
   ],
   bail: 0,
   baseUrl: "https://www.gear4music.com",
   connectionRetryTimeout: 30000,
   connectionRetryCount: 5,
   framework: "mocha",
   mochaOpts: {
      ui: "bdd",
      timeout: 60000
   },
   reporters: ["spec"],
   afterStep: async ({ error }) => {
      if (error) {
         await browser.takeScreenshot("./screenshots");
      }
   }
}
