

class Area1{

    constructor(length){
        this.length = length
    }
    

    square(){
        console.log(`Area of square:${this.length*this.length}`)
    }
}



class Area extends Area1{
    constructor(length,breadth){
        super(length)
        this.breadth = breadth
    }

    rectangle(){
        console.log(`Area of rectangle:${this.length*this.breadth}`)
    }
}
const a = new Area(23,34)
const b = new Area1(34)
a.rectangle()
b.square()