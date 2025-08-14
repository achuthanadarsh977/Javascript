
function powerof(x){

    if (x < 0){
        return false
    }

    while (x >= 1){
        if (x / 2 === 0){
            return true
        }

        else{
            return false
        }
    }
}

console.log(powerof(15))