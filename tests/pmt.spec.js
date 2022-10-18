describe("PMT Tests", () => {
    it("displays the PMT logo", async () => {
        await browser.url("https://www.pmtonline.co.uk/");
        const headerLogo = await $(".logo");
        await browser.saveScreenshot(`./screenshots/pmt.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});