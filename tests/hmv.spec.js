describe("HMV Tests", () => {
    it("displays the HMV logo", async () => {
        await browser.url("https://store.hmv.com/");
        const headerLogo = await $(".logo");
        await browser.saveScreenshot(`./screenshots/hmv.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});