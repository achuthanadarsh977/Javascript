

//How to view property descriptor
// let person = {name : "Alice" , age : 23 , gender : 'Male'}

// let desc = Object.getOwnPropertyDescriptor(person ,"age" , "gender")
// console.log(desc)


//How to define property descriptor

// let person1 = {}



// Object.defineProperty(person1,"age",{
//      value:25,
//      writable: true,
//      enumerable: true,
//      configurable: true
// })

// Object.defineProperty(person1,"name",{
//      value: "John D",
//      writable: true,
//      enumerable: true,
//      configurable: false

// })

// delete person1.age

// console.log(person1)


let user = {
    fname:"John",
    lname:"Doe"
}

Object.defineProperty(user , 'fullname',{
    get(){
        return `${this.fname}`+'  '+`${this.lname}` 
    },

    set(name){
        [`${this.fname}`+' '+`${this.lname}`] 
    },
        enumerable: true,
        configurable: true
});

user.fullname = "John Smith"

console.log(user.fullname)
console.log(user.fname)
console.log(user.lname)