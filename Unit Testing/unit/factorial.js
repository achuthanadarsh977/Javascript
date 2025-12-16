


function factorial(n){
    if(n < 0){
        return "no number"
    }

    if(n === 0 || n === 1){
        return 1
    }

    return n * factorial(n-1)
}


console.log(factorial(25))

console.log(factorial(0))



module.exports = factorial