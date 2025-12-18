
async function getuser(){
    return {id:1 , name:'Mosh'}
}



test("getuser" , async() => {
    const user  = await getuser()
    expect(user.name).toBe('Mosh')
} )



test("getid" ,  async() => {
    const user1 = await getuser()
    expect(user1.id).toBe(1)
}) 


async function getrectangle(){
    return {length:34 , breadth:14}
}


test("getrectangle" , async() => {
    const rectangle = await getrectangle()
    expect(rectangle.length).toBe(34)
    expect(rectangle.breadth).toBe(14)
})


