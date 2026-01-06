
const calculatesubtract = require('../calculatesubtract');


test("calculates difference" , () => {
    const result = calculatesubtract(20,10)
    expect(result).toBe(10)
})