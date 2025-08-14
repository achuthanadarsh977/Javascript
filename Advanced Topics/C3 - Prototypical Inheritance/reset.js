
// function Circle(radius){
//     this.radius = radius
    
// }

// Circle.prototype.sayarea = function(){
//     return Math.PI*this.radius**2
// }

// const c = new Circle(5)
// console.log(c.sayarea())
// console.log(c.constructor === Circle)


// function rectangle(length,breadth){
//     this.length = length;
//     this.breadth = breadth;
// }

// rectangle.prototype.say = function(){
//     console.log('Rectangle Calculation')
//     console.log('Perimeter:'+(2*(this.length+this.breadth)))
//     console.log('Area:'+(this.length*this.breadth))
// }

// function square(s){
//     this.s = s
// }

// square.prototype.sya = function(){
//     console.log('Square Calculation')
//     console.log('Perimeter:'+(this.s*4))
//     console.log('Area:'+(this.s**2))
// }

// const r1 = new rectangle(12,13)
// r1.say()

// const s1 = new square(12)
// s1.sya()

// console.log(r1.constructor)


// function Circle(radius){
//     this.radius = radius
// }

// //Resetting constructor
// // Circle.prototype = {
// //     draw(){
// //         console.log('circle drawn')
// //     }
// // }

// Circle.prototype = {
//     constructor:Circle,
//     draw(){
//         console.log(c.constructor === Circle)
//     }
// }

// const c = new Circle(4)
// console.log(c.constructor === Circle)

// console.log(c.constructor)


function rectangle(length,breadth){
    this.length = length,
    this.breadth = breadth
}

rectangle.prototype = {
    constructor:rectangle,
    draw(){
        console.log('drawing rectangle')
    }
}

const r = new rectangle(3,4)
console.log(r.constructor === rectangle)