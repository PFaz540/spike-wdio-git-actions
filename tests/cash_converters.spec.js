describe("Cash Converters Tests", () => {
    it("displays the Cash Converters logo", async () => {
        await browser.url("https://www.cashconverters.co.uk/");
        const headerLogo = await $(".header__logo");
        await browser.saveScreenshot(`./screenshots/cash_converters.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});