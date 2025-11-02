
const {test, expect} = require('@playwright/test')

test("This test has written in Traditional Function Approach", async function firsttest({page}){
    await console.log("It is a First Playwright Testcase, it has written using Traditional Function!!!!");
    
})

test("This test has written in Ananymous Function Approach", async function({page}){
   await console.log("It is a First Playwright Testcase, it has written using Ananymous Function!!!!");
})


test("This test has written in Arrow Function Approach", async ({page})=>{
    await console.log("It is a First Playwright Testcase, it has written using Ananymous Function!!!!");
})