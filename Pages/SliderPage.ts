import { Locator, Page } from '@playwright/test';

export class SliderPage {

  readonly page: Page;
  readonly dragSliderLink: Locator;
  readonly slider: Locator;
  readonly sliderValue: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dragSliderLink = page.locator('a[href*="drag-drop-range-sliders-demo"]').filter({ hasText: 'Drag & Drop Sliders' }).first();

    this.slider = page.locator('#slider3').getByRole('slider');

    this.sliderValue = page.locator('#rangeSuccess');
  }

  async goto() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async openSliderPage() {
    await this.dragSliderLink.waitFor({ state: 'visible' });
    await this.dragSliderLink.click();
    await this.page.waitForURL(/drag-drop-range-sliders-demo/, { timeout: 10000 });
  }

  async moveSliderTo95() {
    await this.slider.waitFor({ state: 'visible' });
    await this.slider.evaluate((element: HTMLInputElement) => {
      element.value = '95';
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }
}