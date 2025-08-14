

class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log(`Hi my name is ${this.name} & I am ${this.age} years old`)
    }
}

const p = new Person('John Samuel',23)
p.greet()
