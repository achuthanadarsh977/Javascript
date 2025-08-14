
//Factory Function
function CreateCircle(radius){
    return{
        radius:radius,
        draw(){
            console.log('draw function')
        }
    };
}

const circle1 = CreateCircle(12)
console.log(circle1)

const circle2 = CreateCircle(13)
console.log(circle2)

//Constructor Function

function Circle(radius){
    this.radius = radius,
    this.draw = function(){
        console.log("draw function")
    }
}

const mycircle = new Circle(12)
console.log(mycircle)