

function validateage(age){

    if((age < 18) || (age > 60)){
        throw new Error("Invalid age")
    }


    return true

}