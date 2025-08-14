

// Instance members


// const circle = function(radius){
//     this.radius = radius,
//     this.draw = function(){
//         console.log('Area:'+(3.14*`${this.radius}`))
//     }
// }

// const c1 = new circle(12.25)
// const c2 = new circle(12.3)
// console.log(c1.draw() === c2.draw())




//Prototype members

// function Circle(radius){
//     this.radius = radius
// }

// Circle.prototype.calculate = function(){
//     console.log('Area:'+(Math.PI*`${this.radius}`**2))
//     console.log('Perimeter:'+(2*Math.PI*`${this.radius}`))
// }

// const t = new Circle(12.23)
// const r = new Circle(11.44)
// const w = Object.keys(t)
// for(i in w){
//     console.log(i)
// } 

// for (j of w){
//     console.log(j)
// }

const John = function(list){
    this.list = list
}

John.prototype.mylast = function(){
    return this.list[this.list.length - 1]
}

const j = new John([1,2,3,4,5])
console.log(j.mylast())
console.log(j.constructor)