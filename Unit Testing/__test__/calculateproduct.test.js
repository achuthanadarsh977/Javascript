const calculateproduct = require('../calculateproduct')

test("calculate product" , () => {
    const result = calculateproduct(100,200)
    expect(result).toBe(20000)
})