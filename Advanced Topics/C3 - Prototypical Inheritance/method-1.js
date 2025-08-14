

class Birds{
    fly(){
        console.log('Birds are flying')
    }
}


class Eagle extends Birds{
    fly(){
        super.fly()
        console.log('Eagles are moving')

    }
}

const b = new Birds()
const e = new Eagle()
e.fly()


