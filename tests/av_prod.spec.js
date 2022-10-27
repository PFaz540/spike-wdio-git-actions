describe("AV Production Tests", () => {
    it("displays the AV logo [Production]", async () => {
        await browser.url("https://www.av.com");
        const headerLogo = await $(".header-logo");
        await browser.saveScreenshot(`./screenshots/av-prod.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});