import { test, expect } from '@playwright/test';
import { InputFormPage } from '../Pages/InputFormPage';

test('Validate Input Form Submit', async ({ page }) => {

    const form = new InputFormPage(page);

    await form.goto();

    await form.openInputForm();

    await form.submit();

    // HTML5 validation
    await expect(form.name).toBeFocused();

    await form.fillForm();

    await form.submit();

    await expect(form.successMessage).toHaveText(
        'Thanks for contacting us, we will get back to you shortly.'
    );

});