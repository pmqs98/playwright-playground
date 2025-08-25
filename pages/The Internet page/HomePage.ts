import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
	readonly page: Page;
	readonly url: string;
	readonly pageTitleHeader: Locator;
	readonly challengingDOMLink: Locator;
	readonly dropdownLink: Locator;
	readonly dynamicControlsLocator: Locator;
	readonly loginPageLocator: Locator;

	constructor(page: Page) {
		this.page = page;
		this.url = "https://the-internet.herokuapp.com/";
		this.pageTitleHeader = page.getByRole("heading", {
			name: "Welcome to the-internet",
		});
		this.challengingDOMLink = page.getByRole("link", {
			name: "Challenging DOM",
		});
		this.dropdownLink = page.getByRole("link", { name: "Dropdown" });
		this.dynamicControlsLocator = page.getByRole("link", {
			name: "Dynamic Controls",
		});
		this.loginPageLocator = page.getByRole("link", {
			name: "Form Authentiication",
		});
	}

	/**
	 * Navigate to the home page.
	 */
	async goToHomePage() {
		await this.page.goto(this.url);
	}

	/**
	 * Assert that the welcome heading is visible.
	 */
	async assertWelcomeHeading() {
		await expect(this.pageTitleHeader).toBeVisible();
	}

	/**
	 * Navigate to the Challenging DOM page.
	 */
	async goToChallengingDOMPage() {
		await this.challengingDOMLink.click();
	}

	/**
	 * Navigate to the Dropdown page.
	 */
	async goToDropdownPage() {
		await this.dropdownLink.click();
	}

	/**
	 * Navigate to the Dynamic Controls page.
	 */
	async goToDynamicControlsPage() {
		await this.dynamicControlsLocator.click();
	}

	/**
	 * Navigate to the Login page.
	 */
	async goToLoginPage() {
		await this.loginPageLocator.click();
	}
}
