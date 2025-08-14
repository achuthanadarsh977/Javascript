// A mixin with extra functionality
const sayHiMixin = {
    sayHi() {
        console.log(`Hi, my name is ${this.name}`);
    },
    sayBye() {
        console.log(`Bye from ${this.name}`);
    }
};

// Class 1
class Person {
    constructor(name) {
        this.name = name;
    }
}

// Class 2
class Animal {
    constructor(name) {
        this.name = name;
    }
}

// Add mixin methods to both class prototypes
Object.assign(Person.prototype, sayHiMixin);
Object.assign(Animal.prototype, sayHiMixin);

// Create objects
const p = new Person("Alice");
p.sayHi();  // Hi, my name is Alice
p.sayBye(); // Bye from Alice

const a = new Animal("Doggo");
a.sayHi();  // Hi, my name is Doggo
