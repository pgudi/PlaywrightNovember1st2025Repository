const {test, expect} = require('@playwright/test')

test("First Assertion", async ({page})=>{
    expect(35).toBe(35)
})

test("Second Assertion", async ({page})=>{
    expect(100.75).toBe(100.75)
})

test.skip("Third Assertion", async ({page})=>{
    expect(450).toBeGreaterThan(100)
})

test("Fourth Assertion", async ({page})=>{
    expect(450).toBeLessThanOrEqual(450)
})

test("Fifth Assertion", async ({page})=>{
    expect(300).toBeLessThan(100)
})

test("Sixth Assertion", async ({page})=>{
    expect(true).toBeTruthy()
})

test("Seventh Assertion", async ({page})=>{
    expect('S G Software Testing'.includes('Testing')).toBeTruthy()
})

test("Eigth Assertion", async ({page})=>{
    expect('S G Software Testing').toContain('Software')
})