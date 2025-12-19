


describe("mock test" , () => {

    const sendtext = jest.fn()

    sendtext.mockReturnValue('ok')

    const result = sendtext('message')

    expect(sendtext).toHaveBeenCalledWith('message')

    expect(result).toBe('ok')

})




describe("test value" , () => {
    it("test suite" , () => {
        const send = jest.fn()
        send.mockResolvedValue("Send")

        const ren  = send()
        console.log(ren)
    })
})

