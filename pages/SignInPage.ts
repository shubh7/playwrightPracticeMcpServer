import { Page, Locator } from '@playwright/test';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../configs/test.env') });

const BASE_URL = process.env.url || 'https://www.saucedemo.com/';
const DEFAULT_USER = process.env.user || '';
const DEFAULT_PASSWORD = process.env.password || '';

export class SignInPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;
  readonly inventoryItemLabels: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByPlaceholder(/user(name)?/i);
    this.passwordInput = page.getByPlaceholder(/password/i);
    this.loginButton = page.getByRole('button', { name: /login/i });
    this.errorMessage = page.getByText(/invalid|incorrect|error/i);
    this.inventoryItemLabels = page.locator('.inventory_item_name');
  }

  async goto() {
    await this.page.goto(BASE_URL);
  }

  async signIn(username: string = DEFAULT_USER, password: string = DEFAULT_PASSWORD) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getHomePageLabels() {
    // Returns all visible labels on the home page after login
    return this.inventoryItemLabels;
  }
}
