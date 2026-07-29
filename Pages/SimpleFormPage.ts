
import { Locator, Page } from '@playwright/test';

export class SimpleFormPage {

  readonly page: Page;
  readonly simpleFormLink: Locator;
  readonly messageTextbox: Locator;
  readonly getCheckedValueButton: Locator;
  readonly outputMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.simpleFormLink = page.locator('a[href*="simple-form-demo"]').filter({ hasText: 'Simple Form Demo' }).first();

    this.messageTextbox = page.locator('input[placeholder="Please enter your Message"]').first();

    this.getCheckedValueButton = page.getByRole('button', {
      name: 'Get Checked Value'
    }).first();

    this.outputMessage = page.locator('body');
  }

  async goto() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async openSimpleFormDemo() {
    await this.simpleFormLink.waitFor({ state: 'visible' });
    await this.simpleFormLink.click();
    await this.page.waitForURL(/simple-form-demo/, { timeout: 10000 });
  }

  async enterMessage(message: string) {
    await this.messageTextbox.waitFor({ state: 'visible' });
    await this.messageTextbox.fill(message);
  }

  async clickGetCheckedValue() {
    await this.getCheckedValueButton.waitFor({ state: 'visible' });
    await this.getCheckedValueButton.click();
  }
}