

class Circle{
    constructor(radius){
        this.radius = radius
    }

    get area(){
        return Math.PI * this.radius**2
    }

    set area(value){
        this.radius = value
        if(value < 0){
            throw new Error('Value should not be less than zero')
        }
    }
}

const r = new Circle(5)
console.log(r.area)
r.radius = 5
console.log()