

const factorial = require('../factorial')

describe("Calculate Factorial" , () => {
    it("Should return factorial" , () => {
        expect(factorial(25)).toBe(1.5511210043330986e+25)
    }),

    it("Should return 0" , () => {
        expect(factorial(0)).toBe(1)
    })
})

