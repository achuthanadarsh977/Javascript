

class Animal{
    constructor(word){
        this.word = word
    }

    dog(){
        console.log(`Dogs are ${this.word}!`)
    }
}

class Cat extends Animal{
    constructor(word1,word){
        super(word)
        this.word1 = word1
    }
    meow(){
        console.log(`Cats and Dogs are ${this.word} and ${this.word1}`)
    }
}

const c = new Cat('animals','living beings')
c.meow()