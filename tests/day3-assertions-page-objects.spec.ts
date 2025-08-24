import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/The Internet page/HomePage.js";

test("go to the-internet page and assert home page header", async ({
	page,
}) => {
	const homePage = new HomePage(page);

	await homePage.goToHomePage();
	await homePage.assertWelcomeHeading();
});
