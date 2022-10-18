describe("G4M Production Tests", () => {
    it("displays the G4m logo [Production]", async () => {
        await browser.url("https://www.gear4music.com");
        const headerLogo = await $(".header-logo");
        await browser.saveScreenshot(`./screenshots/g4m-prod.png`);
        await expect(headerLogo).toBeDisplayed();
    });
});