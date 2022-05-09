import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display Project Y as title", async ({ page }) => {
    await expect(page).toHaveTitle(/Project Y/);
  });

  test.describe("when the user clicks on Connection", () => {
    test(", it should display the Sign In page", async ({ page }) => {
      await page.locator("text=Connexion").click();
      await page.waitForNavigation({ url: "/sign-in" });
    });
  });
});
