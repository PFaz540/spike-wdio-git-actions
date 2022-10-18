describe("Curly Music Tests", () => {
    it("displays the Curly Music logo", async () => {
        await browser.url("https://curlymusic.com/");
        const headerLogo = await $(".site-header__logo-image");
        await browser.saveScreenshot(`./screenshots/curly_music.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});