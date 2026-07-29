import { Locator, Page } from '@playwright/test';

export class InputFormPage {

  readonly page: Page;

  readonly inputFormLink: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly company: Locator;
  readonly website: Locator;
  readonly country: Locator;
  readonly city: Locator;
  readonly address1: Locator;
  readonly address2: Locator;
  readonly state: Locator;
  readonly zip: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {

    this.page = page;

    this.inputFormLink = page.getByRole('link', {
      name: 'Input Form Submit'
    });

    this.name = page.locator('#name');
    this.email = page.locator('#inputEmail4');
    this.password = page.locator('#inputPassword4');
    this.company = page.locator('#company');
    this.website = page.locator('#websitename');
    this.country = page.locator('select[name="country"]');
    this.city = page.locator('#inputCity');
    this.address1 = page.locator('#inputAddress1');
    this.address2 = page.locator('#inputAddress2');
    this.state = page.locator('#inputState');
    this.zip = page.locator('#inputZip');

    this.submitButton = page.getByRole('button', {
      name: 'Submit'
    });

    this.successMessage = page.locator('.success-msg');
  }

  async goto() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async openInputForm() {
    await this.inputFormLink.click();
  }

  async submit() {
    await this.submitButton.click();
  }

  async fillForm() {

    await this.name.fill('Aiswarya KP');
    await this.email.fill('aiswarya@test.com');
    await this.password.fill('Test@123');
    await this.company.fill('ABC Pvt Ltd');
    await this.website.fill('https://example.com');

    await this.country.selectOption({
      label: 'United States'
    });

    await this.city.fill('New York');
    await this.address1.fill('123 Main Street');
    await this.address2.fill('Apartment 101');
    await this.state.fill('New York');
    await this.zip.fill('10001');
  }
}