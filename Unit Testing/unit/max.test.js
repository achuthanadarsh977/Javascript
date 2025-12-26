

const max = require("../max")

describe("Maximum of three numbers" , () => {
    it("Maximum of 1 , 2 , 3" , () => {
        expect(max(1,2,3)).toBe(3)
    });

    it("Maximum of 3 , 4 , 5", () => {
        expect(max(3,4,5)).toBe(5)
    });

})