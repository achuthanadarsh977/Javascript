class Operations{

    static add(a,b){
        return a+b
    }

    static subtract(a,b){
        return b-a
    }

    static product(a,b){
        return a*b
    }

    static division(a,b){
        return a/b
    }

    static modular(a,b){
        return a%b
    }
}

console.log('Sum of two numbers:'+Operations.add(23,34))
console.log('Difference of two numbers:'+Operations.subtract(23,34))
const c = new Operations()
c.division