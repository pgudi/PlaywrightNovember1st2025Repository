const {test, expect} = require('@playwright/test')

test('Launch Browser and Navigate URL', async({page})=>{
    await page.goto("https://www.w3schools.com/")
    await page.waitForTimeout(4000)

    const title = await page.title()
    console.log("Title :"+title);
    
    const url = await page.url()
    console.log("URL of Application :"+url);

    await expect(page).toHaveTitle('W3Schools Online Web Tutorials')
    await expect(page).toHaveURL('https://www.w3schools.com/')
    
})