
// let address = {
//     street:'A',
//     JOB : 'Doctor',
//     road : 'rms ayushman'
// }


// function showaddress(address){
//     for (key in address){
//     console.log(key,":",address[key])
// }
// }

// showaddress(address)


let address = {
    street:'B',
    job:'magician',
    road:'sivananda salai'
}

let adie = {
    street:'C',
    job:'banker',
    road:'nelson manickam'
}

//Factory Function
function Address1(street,job,road){
    return{
        street,
        job,
        road
    }
}

//Constructor Function
function Address2(street,job,road){
    this.street = street;
    this.job = job;
    this.road = road;
}


console.log(Address1(address.street,address.job,address.road))

console.log(Address2(adie.street , adie.job , adie.road))
