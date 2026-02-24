function powerof(x){
    if (x < 1){
        return false
    }
    return (x & (x - 1)) === 0
}

console.log(powerof(16))  // true
console.log(powerof(15))  // false
console.log(powerof(1))   // true (2^0)
console.log(powerof(0))   // false