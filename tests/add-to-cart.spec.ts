import { test, expect } from '@playwright/test';
import { SignInPage } from '../pages/SignInPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Add a product to cart after login', async ({ page }) => {
  // Step 1 & 2: Login
  const signInPage = new SignInPage(page);
  await signInPage.goto();
  await signInPage.signIn(); // uses credentials from test.env

  // Step 3: Add first product to cart
  const productsPage = new ProductsPage(page);
  await productsPage.addFirstProductToCart();

  // Wait for cart badge to appear and show 1 item
  await expect(productsPage.cartBadge).toBeVisible({ timeout: 5000 });
  await expect(productsPage.cartBadge).toHaveText('1', { timeout: 5000 });

  // Optionally, go to cart and verify product is listed
  await productsPage.goToCart();
  const cartItems = page.locator('.cart_item');
  await expect(cartItems).toHaveCount(1);
});
