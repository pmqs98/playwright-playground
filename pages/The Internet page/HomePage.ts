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

	async goToHomePage() {
		await this.page.goto(this.url);
	}

	async assertWelcomeHeading() {
		await expect(this.pageTitleHeader).toBeVisible();
	}
}
