
import { test, expect } from '@playwright/test';
import { SimpleFormPage } from '../Pages/SimpleFormPage';

test('Validate Simple Form Demo', async ({ page }) => {

  const simpleForm = new SimpleFormPage(page);

  await simpleForm.goto();

  await simpleForm.openSimpleFormDemo();

  await expect(page).toHaveURL(/simple-form-demo/);

  const message = "Simple Form Demo";

  await simpleForm.enterMessage(message);

  await simpleForm.clickGetCheckedValue();

  await expect(simpleForm.outputMessage).toContainText(message, { timeout: 10000 });

});