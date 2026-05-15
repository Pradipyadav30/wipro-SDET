import { test, expect } from '@playwright/test';

// Test 1: Check the Page Title
test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // This matches the <title> tag in your login.html
  await expect(page).toHaveTitle(/Home/);
});

// Test 2: Check if the Login Button is visible
test('login button is visible', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  
  // This looks for your login button
  const loginButton = page.locator('button'); 
  await expect(loginButton).toBeVisible();
});