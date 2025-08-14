class Shape{
    constructor(figure){
        this.figure = figure
    }

    display(){
        console.log(`The given shape is ${this.figure}`)
    }
}


class Color extends Shape{
    constructor(figure,color){
        super(figure)
        this.color = color
    }

    colordisplay(){
        console.log(`The color is ${this.color} and the shape is ${this.figure}`)
    }
}


const r = new Color('circle','red')

const s = new Shape('circle')
s.display()
r.colordisplay()