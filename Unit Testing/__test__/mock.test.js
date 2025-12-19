

describe("test suite" , () => {
    it('test case' , () => {
        const greet = jest.fn()
        greet.mockResolvedValue('Hello')

        const result = greet()
        console.log(result)
    })
})

describe("test value" , () => {
    it("test suite" , () => {
        const send = jest.fn()
        send.mockResolvedValue("Send")

        const ren  = send()
        console.log(ren)
    })
})


