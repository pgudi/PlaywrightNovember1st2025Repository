const {test, expect} = require('@playwright/test')

test('Login and Logout Functionality', async ({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.waitForTimeout(3000)
    //Login Action
    await page.locator("//input[@placeholder='Username']").fill("Admin")
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle('OrangeHRM')
    // Logout Action
    await page.getByRole('img', { name: 'profile picture' }).first().click()
    await page.getByText('Logout').click()
    await page.waitForTimeout(3000)
    await expect(page).toHaveTitle('OrangeHRM')

})