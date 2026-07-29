# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: slider.spec.ts >> Validate Drag & Drop Slider
- Location: tests\slider.spec.ts:5:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#rangeSuccess')
Expected: "95"
Received: "100"
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#rangeSuccess')
    14 × locator resolved to <output id="rangeSuccess">100</output>
       - unexpected value "100"

```

```yaml
- status: "100"
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from '@playwright/test';
  3  | import { SliderPage } from '../Pages/SliderPage';
  4  | 
  5  | test('Validate Drag & Drop Slider', async ({ page }) => {
  6  | 
  7  |   const sliderPage = new SliderPage(page);
  8  | 
  9  |   await sliderPage.goto();
  10 | 
  11 |   await sliderPage.openSliderPage();
  12 | 
  13 |   await expect(page).toHaveURL(/drag-drop-range-sliders-demo/);
  14 | 
  15 |   await sliderPage.moveSliderTo95();
  16 | 
> 17 |   await expect(sliderPage.sliderValue).toHaveText('95');
     |                                        ^ Error: expect(locator).toHaveText(expected) failed
  18 | 
  19 | });
```