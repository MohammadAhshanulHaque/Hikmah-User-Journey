import { test, expect } from '@playwright/test';

test('Verify Browser has correct title', async ({ page }) => {
  await page.goto('https://dev.hikmah.net/');
  await expect(page).toHaveTitle('Hikmah: A Social Network Built on Respect and Values');
});


test('Verify Login page has correct header', async ({ page }) => {
  await page.goto('https://dev.hikmah.net/');
  await expect(page.getByRole('heading', { name: 'Freedom with values' })).toBeVisible();
});


test('Verify Sucessful Login with valid credential', async ({ page }) => {
  await page.goto('https://dev.hikmah.net/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Microsoft' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('haque123451@hotmail.com');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('r7710473*');
  await page.getByTestId('primaryButton').click();
  await page.getByTestId('secondaryButton').click();
  await page.getByRole('button', { name: 'Continue' }).click();


  await expect(page.getByText('Mohammad Ahshanul Haque')).toBeVisible();

  //await page.waitForTimeout(3000);

});


test('Verify Login failed with valid username & invalid password', async ({ page }) => {
  await page.goto('https://dev.hikmah.net/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Microsoft' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('haque123451@hotmail.com');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('r7710764');
  await page.getByTestId('primaryButton').click();
  await expect(page.locator('#field-8__validationMessage')).toContainText('That password is incorrect for your Microsoft account.');

  //await page.waitForTimeout(3000);
});


test('Verify the post is updated', async ({ page }) => {
  await page.goto('https://dev.hikmah.net/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Microsoft' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('haque123451@hotmail.com');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('r7710473*');
  await page.getByTestId('primaryButton').click();
  await page.getByTestId('secondaryButton').click();
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('link', { name: 'My posts' }).click();
  await expect(page.locator('#center')).toContainText('রাসূল বিশ্বাস করেছেন যা তাঁর প্রতি তাঁর প্রভুর পক্ষ থেকে নাযিল হয়েছে এবং মু’মিনগণও। তারা প্রত্যেকেই আল্লাহ, তাঁর ফেরেশতা, তাঁর কিতাবসমূহ এবং তাঁর রাসূলদের প্রতি ঈমান এনেছে। তারা বলে, “আমরা আলাদা করি না তাঁর কোন রাসূলের মাঝে।” তারা বলে, “আমরা শুনলাম এবং মান্য করলাম।... See more');
  
  //await page.waitForTimeout(3000);
});

test('Verify Sucessful Logout', async ({ page }) => {
  await page.goto('https://dev.hikmah.net/');

  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Microsoft' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('haque123451@hotmail.com');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('r7710473*');
  await page.getByTestId('primaryButton').click();
  await page.getByTestId('secondaryButton').click();
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.waitForTimeout(3000);

  await page.getByText('Logout').click();

  await expect(page.locator('h1')).toContainText('Sign In');

  //await page.waitForTimeout(3000);

}); 