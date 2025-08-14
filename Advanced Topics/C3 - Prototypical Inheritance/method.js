

class Animal{
    speak(){
        console.log('Animals make a sound')
    }
}


class Dog extends Animal{
    speak(){
        console.log('Dogs are barking')
    }
}

class Lion extends Dog{
    speak(){
        console.log('Lions are roaring')
    }
}

const a = new Animal()
const b = new Dog()
const l = new Lion()
a.speak()
b.speak()
l.speak()