
const calculateAverage = require('../calculateAverage')

describe('Calculate Average' , () => {
    it('Should return 0 if array is empty', () => {
        expect(calculateAverage([])).toBe(0)
    }),

    it('Should return 3' , () => {
        expect(calculateAverage([1,2,3,4,5])).toBe(3)
    } )
})

