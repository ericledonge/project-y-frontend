const { test, expect } = require("@playwright/test");

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");
  });

  test("should display Project Y as title", async ({ page }) => {
    await expect(page).toHaveTitle(/Project Y/);
  });

  test.describe("when the user clicks on Connection", () => {
    test(", it should display the Sign In page", async ({ page }) => {
      await page.locator("text=Connexion").click();
      await page.waitForNavigation({ url: "http://localhost:3000/sign-in" });
    });
  });
});
