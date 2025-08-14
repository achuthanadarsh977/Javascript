const numbers = [12,10,19,9,8,21,14,8,9,7]


const allOdd = numbers.every(num => num % 2 !== 0 )
console.log(allOdd)

const allEven = numbers.some(num => num % 2 === 0)

console.log(allEven)



const haslog = numbers.find(num => num % 2 === 0)
console.log(haslog)

const hanlog = numbers.findIndex(num => num%3 === 0 )
console.log(hanlog)

const hastlog = numbers.find(num => num % 7 === 0)
console.log(hastlog)


const haflog = numbers.filter(num => num % 7 === 0)
console.log(haflog)

