

const tripleproduct = require("../tripleproduct")

// test("TestProduct" , () => {
//     expect(tripleproduct(1,2,3)).toBe(6)
// })


describe("TestProduct" , () => {
    it("Product1" , () => {
        expect(tripleproduct(1,9,3)).toBe(27)
    });

    it("Product2" , () => {
        expect(tripleproduct(2,8,9)).toBe(144)
    })
})