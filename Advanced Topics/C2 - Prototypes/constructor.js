
function Person2(name2 , age2){
    this.name2 = name2;
    this.age2 = age2;
}

Person2.prototype.sayhello = function(){
    console.log( `Hello ${this.name2}`)
    console.log(`I am ${this.age2} years old`)
}

const p2 = new Person2('John G' , 23)
p2.sayhello()
console.log(p2._proto_ === Person2.prototype)
