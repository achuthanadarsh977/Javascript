

function Shape(shape){
    this.shape = shape
}


Shape.prototype.sayshape = function(){
    console.log(`The given shape is ${this.shape}`)
}


function Color(colon,shape){
    Shape.call(this,shape)
    this.colon = colon
}

Color.prototype.saycolor = function(){
    console.log(`The given shape is ${this.shape} & the given color is ${this.colon}`)
}


const s = new Shape('Circle')
const t = new Color('Circle','red')
s.sayshape()
t.saycolor()
