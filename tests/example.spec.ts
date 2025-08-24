import{test, expect} from '@playwright/test';

let url:string = "https://playwright.dev"

test('open https://playwright.dev', async({page}) => {
    await page.goto(url);
    await expect(page).toHaveTitle(/.*Playwright.*/);
    await page.getByText('Docs').click();
    await expect(page).toHaveURL(/.*docs/);
});