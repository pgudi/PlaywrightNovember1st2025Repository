
const {test, expect} = require('@playwright/test')

test("This test has written in Traditional Function Approach", function firsttest({page}){
    console.log("It is a First Playwright Testcase, it has written using Traditional Function!!!!");
    
})

test("This test has written in Ananymous Function Approach", function({page}){
    console.log("It is a First Playwright Testcase, it has written using Ananymous Function!!!!");
})


test("This test has written in Arrow Function Approach", ({page})=>{
    console.log("It is a First Playwright Testcase, it has written using Ananymous Function!!!!");
})