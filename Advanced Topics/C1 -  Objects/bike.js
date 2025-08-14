let bike = {
    name : 'Yamaha',
    model : 'YM-01',
    year : '2023',
    location : 'Chennai',
    status1(){                   
       console.log('Bike sold')
    }
}

// console.log('Bike name:'+bike.name)
// console.log('Model:'+bike.model)
// console.log('Year:'+bike.year)
// console.log('Location:'+bike.location)
// bike.status1()

// for (i in bike){
//     console.log(i+':'+bike[i])
// }


var lengthOfLastWord = function(s) {
    let w = s.split(' ')
    let t = w[w.length - 1]
    console.log(t.length)
    
};

lengthOfLastWord('luffy is still joyboy')