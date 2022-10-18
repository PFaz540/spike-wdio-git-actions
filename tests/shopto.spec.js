describe("ShopTo Tests", () => {
    it("displays the ShopTo logo", async () => {
        await browser.url("https://www.shopto.net/");
        const headerLogo = await $("#header_logo");
        await browser.saveScreenshot(`./screenshots/shopto.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});