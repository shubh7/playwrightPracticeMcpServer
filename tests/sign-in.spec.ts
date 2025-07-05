import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';

test('Login and verify labels on home page', async ({ page }) => {
  const signInPage = new SignInPage(page);
  await signInPage.goto();
  await signInPage.signIn(); // uses credentials from test.env

  // Verify labels present on home page
  const labels = await signInPage.getHomePageLabels();
  await expect(labels).toHaveCount(6); // saucedemo.com has 6 products by default
  // Optionally, check for specific label text
  // await expect(labels).toContainText(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
});
