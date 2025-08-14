
class Circle{
    constructor(radius){
        this.radius = radius
    }

    area(){
        return Math.PI*this.radius**2
    }

    perimeter(){
        return 2*Math.PI*this.radius
    }
}


class rectangle{
    constructor(length,breadth){
        this.length = length
        this.breadth = breadth
    }

    perimeter(){
        return 2*(this.length+this.breadth)
    }

    area(){
        return this.length * this.breadth
    }
}

class Square{
    constructor(side){
        this.side = side
    }

    area(){
        return this.side**2
    }

    perimeter(){
        return 4*this.side
    }
}





module.exports = {Circle,rectangle,Square}