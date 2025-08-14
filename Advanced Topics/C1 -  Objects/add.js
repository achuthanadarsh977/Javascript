
// const add = function(a,b){
//     return a+b
// }


// console.log(add.name)
// console.log(add.length)


// Store them in variables
const sayhello = function(name){
    console.log('Hello'+'  '+name)
}

sayhello('Alice')

//Pass them as arguments
function processorInput(callback){
    const name = 'Alice'
    callback(name)
}

processorInput(sayhello)

//
