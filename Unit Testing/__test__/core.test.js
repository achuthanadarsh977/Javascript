

describe("Core Operations" , () => {
    it('test case' , () => {
        const result = [1,2,3,4,5]

        expect(result).toBeDefined()

        expect(result).toEqual(expect.arrayContaining([1,2,3]))
    })
})


test("number comparisons" , () => {
    expect(10).toBeGreaterThan(5)
})


test("Number" , () => {
    expect(16).toBeLessThan(20)
})


test("string matchers" , () => {
    expect("adarsh@gmail.com").toContain("@");
    expect("han").toHaveLength(3);
    expect("hello world").toMatch(/world/);
    expect("hansen").toMatch(/han/);
})

test("array matchers" , () => {
    expect([1,2,3,4,5,6]).toContain(2);
    expect([1,2,3,4,5]).toHaveLength(5);
})


test("Object Matchers" , () => {
    const user = {name:'Sam Daniels' , age:23 , id:1001 , address:"Los Angeles"};
    expect(user).toMatchObject({age:23});
    expect(user).toHaveProperty("name");
})

function divide(a,b){
    if(b === 0){
        throw new Error('Cannot divide by zero')
    }

    return (a/b)
}

test("throw dividing by zero" , () => {
    expect(() => divide(10,0)).toThrow("divide by zero")
})

test('Negative Matchers' , () => {
    expect(5).not.toBe(15)
    expect('abced').not.toMatch(/xyz/)
    expect([1,2,3,4,5]).not.toContain(23)
})



