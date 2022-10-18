describe("GuitarGuitar Tests", () => {
    it("displays the GuitarGuitar logo", async () => {
        await browser.url("https://www.guitarguitar.co.uk/");
        const headerLogo = await $(".header-logo");
        await browser.saveScreenshot(`./screenshots/guitarguitar.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});