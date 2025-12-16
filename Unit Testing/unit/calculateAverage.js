



function calculateAverage(numbers){
    let n = numbers.length
    if(n === 0){
        return 0
    }

    const a = numbers.reduce((sum,curr) => sum+curr,0)
    return (a/n)
}

console.log(calculateAverage([1,2,3,4,5]))

module.exports =  calculateAverage