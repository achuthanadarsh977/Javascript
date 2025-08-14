

class Perimeter{
    constructor(x,y){
        this.x = x
        this.y = y
    }

    display(){
        console.log(`Perimeter of rectangle:+${2*(this.x+this.y)}`)
    }
}

class Area extends Perimeter{
    constructor(x,y){
        super(x)
        super(y)
    }

    sean(){
        console.log(`Area of rectangle:${this.x*this.y}`)
    }
}

const p = new Perimeter(12,13)
const c = new Area(14,12)
p.display
c.sean()