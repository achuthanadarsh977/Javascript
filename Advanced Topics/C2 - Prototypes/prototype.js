
//  let a = {}

// console.log(Object.toString)

//  console.log(a.__proto__ === Object.prototype)



//  let animal = {
//     speak(){
//         console.log('barking')
//     }
//  }

// let cat = Object.create(animal) 
//  console.log(cat.__proto__ === Object.prototype)

// let c = {}

// let b = Object.create(c)
// console.log(b.__proto__ === Object.prototype)

// function Person(name){
//     this.name = name;
// }

// Person.prototype.sayhello = function(){
//     console.log("Hello"+' '+`${this.name}`)
// }

// let alice = new Person('alice')
// alice.sayhello()

// console.log(alice.__proto__ === Person.prototype)


function Person1(name1){
    this.name1 = name1

}


Person1.prototype.sayhi = function(){
    console.log("Hello"+' '+`${this.name1}`)
}

const ram = new Person1('Ram')
ram.sayhi()

console.log(ram.__proto__ === Person1.prototype)