

// describe("test suite" , () => {
//     it('test case' , () => {
//         const result = {name:'Sam' , id:1003 , address:'Chennai'}
//         expect(result).toMatchObject({name:'Sam'})
//         expect(result).toHaveProperty('address')
//         expect(typeof result.id).toBe('number')
//     })
// })


describe("test suite 1" , () => {
    it("test case 1" , () => {
        const result = {"a":1 , "b":2 , "c":3 , "d":4 , "e":5}
        expect(result).toMatchObject({"b":2})
        expect(typeof result.d).toBe('number')
        expect(result.d).toBe(4)
        expect(result).toHaveProperty('c')
    })
})