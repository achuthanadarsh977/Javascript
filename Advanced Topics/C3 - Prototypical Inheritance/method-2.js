
function Vehicle(){

}


Vehicle.prototype.start = function(){
    console.log('Vehicle starting')
}

function Car(){
}

Car.prototype = Object.create(Vehicle.prototype)
Car.prototype.start = function(){
    console.log('Car is starting')
}

const v = new Vehicle()
const c = new Car()
v.start()
c.start()