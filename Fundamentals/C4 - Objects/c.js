// const c = {
//     radius : 1,
//     draw(){
//         console.log('draw')
//     }
// }

// console.log(c)


// for(let key in c){
//     console.log(key , c[key])
// }

const circle = {
    radius: 1,
    draw(){
        console.log('draw')
    }
}

const r = {...circle}
console.log(r)

