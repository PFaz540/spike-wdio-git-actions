describe("Normans Music Tests", () => {
    it("displays the Normans Music logo", async () => {
        await browser.url("https://www.normans.co.uk/");
        const headerLogo = await $(".header__logo");
        await browser.saveScreenshot(`./screenshots/normans.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});