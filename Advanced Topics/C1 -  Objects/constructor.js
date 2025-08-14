

// const square = function(side){
//     this.side = side;
//     this.calculation = function(){
//         console.log('Perimeter:'+(`${this.side}`*4))
//         console.log('Area:'+(`${this.side}`**2))
//     };


// }

// const s = new square(14)
// s.calculation()

const rectangle = function(length,breadth){
    this.length =  length;
    this.breadth = breadth;
    this.calc = function(){
        console.log("Area:"+(this.length * this.breadth))
        console.log("Perimeter:"+(2*(this.length + this.breadth)))
    }
}

const r = new rectangle(12,13)
r.calc()
console.log(r.constructor)


