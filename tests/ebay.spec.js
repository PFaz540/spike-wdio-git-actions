describe("eBay Tests", () => {
    it("displays the eBay logo", async () => {
        await browser.url("https://www.ebay.co.uk/");
        const headerLogo = await $("#gh-la");
        await browser.saveScreenshot(`./screenshots/ebay.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});