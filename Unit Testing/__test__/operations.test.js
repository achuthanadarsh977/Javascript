
const {add,subtract,multiply,modulus} = require('../operations')



describe("Arithmetic Operations" , () =>{
    it("Addition" , () => {
        expect(add(1,2)).toBe(3)
    }),

    it("Subtraction" , () => {
        expect(subtract(1,2)).toBe(-1)
    }),

    it("Multiplication" , () => {
        expect(multiply(1,2)).toBe(2)
    }),

    it("Modulus" , () => {
        expect(modulus(2,1)).toBe(0)
    })
})