
class Birds{
    fly(){
        console.log('Birds are flying')
    }
}


class Eagle extends Birds{
    fly(){
        console.log('Eagles are moving')
    }
}

class Crows extends Eagle{
    fly(){
        console.log('Crows are eating')
    }
}

function Animal(birds){
    birds.fly()
}


const c = new Crows()
Animal(c)