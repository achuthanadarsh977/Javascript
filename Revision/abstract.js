
abstract class Vehicle{
    
    abstract startengine():void;
    
    stopengine():void{
        console.log("Engine has stopped!")
    }
}

class Car extends Vehicle{
    
    startengine():void{
        console.log("Engine has started!")
    }
}


const c = new Car()
c.startengine()
c.stopengine()
