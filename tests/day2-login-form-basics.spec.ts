import { test, expect } from "@playwright/test";

let url: string = "https://parabank.parasoft.com/parabank/index.htm";
const user = {
	username: "john",
	password: "demo",
};

/**
 * Test the login form functionality.
 */
test("loginFormBasics", async ({ page }) => {
	await page.goto(url);
	await expect(page).toHaveTitle(/.*ParaBank.*/);

	await page.fill("//input[@name='username']", user.username);
	await page.fill("//input[@name='password']", user.password);
	await page.click("//input[@type='submit']");

	await expect(page.locator("//div[@id='showOverview']/h1")).toContainText(
		"Accounts Overview"
	);
	await page.click("//a[contains(text(), 'Log Out')]");
});

/**
 * Test the login form error handling.
 */
test("loginFormBasicsLoginError", async ({ page }) => {
	await page.goto(url);
	await expect(page).toHaveTitle(/.*ParaBank.*/);

	await page.click("//input[@type='submit']");

	await expect(page.locator("//div[@id='rightPanel']")).toContainText("Error!");
	await expect(page.locator("//div[@id='rightPanel']")).toContainText(
		"Please enter a username and password."
	);
});
