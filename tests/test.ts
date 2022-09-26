import { expect, test } from '@playwright/test';

test('about page has expected h1', async ({ page }) => {
  await page.goto('/');
  expect(await page.textContent('h1')).toBe(
    'Chennai’s biggest tech conference happening now!'
  );
});
