
const simpleinterest = require('../principal')


test("Simple Interest" , () => {
    expect(simpleinterest(12345,95,4)).toBe(46911)
})