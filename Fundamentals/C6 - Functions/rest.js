

// //rest
// var rest = function(...args){
//     console.log(args)

// }

// rest(19,20,23,23)

// //spread
// let spread = [10,12,33,24]
// console.log(...spread)


// var game = function(first,last,...jack){
//     console.log(first)
//     console.log(last)
//     jack.unshift(first,last)
//     console.log(jack)

// }

// game('basketball','football','travelling','music','cricket')


//Default Parameters

// function interest(principal,interest,rate){
//     rate = rate || 5
//     interest = interest || 25
//     return principal * rate/100 * interest

// }

// console.log(interest(25000,30,30))

//get

// const person = {
//     firstname : 'Ajay',
//     lastname : 'Nair',
//     get person1(){
//         return  `${this.firstname} ${this.lastname}`
//     }
// }


// console.log(person.person1)

// const person1 = {
//     firstname : "John",
//     lastname : 33,
//     get fname(){
//         return `${this.firstname} ${this.lastname}`

//     },
//     set fullname(value){

//         if(typeof value !== string){
//             throw new Error('String does not exist') 
//         }

//         const parts = value.split(' ')
//         if (parts.length !== 2){
//             throw new Error('Enter the correct name')
//         }
//         this.firstname = parts[0]
//         this.lastname = parts[1]
//     }
// }

// person1.parts = person1.fname.split('')
// console.log("First name:"+person1.firstname)
// console.log("Last name:"+person1.lastname)
// console.log("Full Name:"+person1.fname)


// let globalvar = "globalvar"

// var gob = function(){
//     return globalvar
// }

// console.log(gob())

// var gov = function(){
//     let localvar = "localvar"
//     console.log(localvar)
// }

// gov()


// function fsum(args){
//     return arguments[0]+arguments[1]+arguments[2]+arguments[3]+arguments[4]
// }

// console.log(fsum(12,13,1,34,35,67,77,88,999,110))


// function sumAll(...numbers){
//     return numbers.reduce((a,b)=> a + b)
// }

// console.log(sumAll(1,2,3,4))


// function area(pi,radius){
//     pi = 3.14
//     return pi * radius**2
// }

// console.log("Area:"+area(14,3.14))

// const area1 = {
//     radius : 44,
//     pi : Math.PI,
//     get area(){
//         return this.pi * this.radius * this.radius
//     }
// }

// console.log('Radius:'+area1.radius)
// console.log('Pi:'+area1.pi)
// console.log('Area:'+area1.area)

function circle(radius){
    this.radius = radius
}

const c = new circle(5)
console.log(c.constructor)

const n = 42
console.log(n.constructor)