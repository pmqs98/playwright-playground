import { Page, Locator, expect } from "@playwright/test";

export class ChallengingDOMPage {
	readonly page: Page;
	readonly url: string;
	readonly pageTitleHeader: Locator;
	readonly button: Locator;
	readonly alertButton: Locator;
	readonly successButton: Locator;
	readonly table: Locator;

	constructor(page: Page) {
		this.page = page;
		this.url = "https://the-internet.herokuapp.com/";
		this.pageTitleHeader = page.getByRole("heading", {
			name: "Challenging DOM",
		});
		this.button = page.locator("a.button").first();
		this.alertButton = page.locator("a.alert");
		this.successButton = page.locator("a.success");
		this.table = page.getByRole("table");
	}

	/**
	 * Assert that the welcome heading is visible.
	 */
	async assertWelcomeHeading() {
		await expect(this.pageTitleHeader).toBeVisible();
	}

	/**
	 * Click on the 1st button.
	 */
	async clickOnButton() {
		await expect(this.button).toBeVisible();
		await this.button.click();
	}

	/**
	 * Click on the alert button.
	 */
	async clickOnAlertButton() {
		await expect(this.alertButton).toBeVisible();
		await this.alertButton.click();
	}

	/**
	 * Click on the success button.
	 */
	async clickOnSuccessButton() {
		await expect(this.successButton).toBeVisible();
		await this.successButton.click();
	}

	// async clickOnTable() {
	// 	await expect(this.table).toBeVisible();
	// 	await this.table.click();
	// }
}
