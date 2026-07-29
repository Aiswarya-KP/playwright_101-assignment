import { test, expect } from '@playwright/test';
import { SliderPage } from '../Pages/SliderPage';

test('Validate Drag & Drop Slider', async ({ page }) => {

  const sliderPage = new SliderPage(page);

  await sliderPage.goto();

  await sliderPage.openSliderPage();

  await expect(page).toHaveURL(/drag-drop-range-sliders-demo/);

  await sliderPage.moveSliderTo95();

  await expect(sliderPage.sliderValue).toContainText('15');

});