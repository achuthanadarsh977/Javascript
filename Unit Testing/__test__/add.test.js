


function add(a,b){
    return a+b
}


// Arrange – Act – Assert (AAA Pattern)
test("add numbers" , () => {
    const c = 2
    const d = 3

    const result = add(c,d)

    expect(add(2,3)).toBe(5)
})


//Positive Testing & Negative Testing

// function factorial(a){

//     if(a < 0){
//         throw new Error("no number")
//     }

//     if(a === 0 || a === 1){
//         return 1
//     }

//     return a * factorial(a-1)
// }


// test("factorial" , () => {
//     const b = 6.689502913449124e+198

//     const y = factorial(b)

//     expect(y).toBe(120)
// })


// test("factorial1" , () => {
//     const b = factorial(25)

//     expect(b).toBe(1.5511210043330986e+25)
// })
