const factorial1 = require("../factorial1")


describe("there should be factorial" , () => {
    it("factorial1" ,  () => {
        expect(factorial1(5)).toBe(120)
    })
})