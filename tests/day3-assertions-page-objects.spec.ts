import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/The Internet page/HomePage.js";
import { ChallengingDOMPage } from "../pages/The Internet page/ChallengingDOMPage.js";

test("go to the-internet page and assert home page header", async ({
	page,
}) => {
	const homePage = new HomePage(page);

	await homePage.goToHomePage();
	await homePage.assertWelcomeHeading();
});

test("go to the-internet page, enter the challenging DOM page", async ({
	page,
}) => {
	const homePage = new HomePage(page);
	const challengingDOMPage = new ChallengingDOMPage(page);
	await homePage.goToHomePage();
	await homePage.goToChallengingDOMPage();
	await challengingDOMPage.assertWelcomeHeading();
	await challengingDOMPage.clickOnButton();
	await challengingDOMPage.clickOnAlertButton();
	await challengingDOMPage.clickOnSuccessButton();
});
