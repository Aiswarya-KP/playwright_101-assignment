import { Locator, Page } from '@playwright/test';

export class SliderPage {

  readonly page: Page;
  readonly dragSliderLink: Locator;
  readonly slider: Locator;
  readonly sliderValue: Locator;

  constructor(page: Page) {
    this.page = page;

    this.dragSliderLink = page.getByRole('link', {
      name: 'Drag & Drop Sliders'
    });

    this.slider = page.locator("input[value='15']");

    this.sliderValue = page.locator('#rangeSuccess');
  }

  async goto() {
    await this.page.goto('https://www.testmuai.com/selenium-playground/');
  }

  async openSliderPage() {
    await this.dragSliderLink.click();
  }

  async moveSliderTo95() {
    await this.slider.evaluate((element: HTMLInputElement) => {
      element.value = '95';
      element.dispatchEvent(new Event('input', { bubbles: true }));
      element.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }
}