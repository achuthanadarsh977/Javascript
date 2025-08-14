
// function fishbuzz(n){
   

//         if(n%3 === 0 && n%5 !== 0){
//             return 'Fish'
//         }

//         else if(n%5 === 0 && n%3 !== 0){
//             return 'Buzz'
//         }

//        else  if(n%3 === 0 && n%5 === 0){
//             return 'FishBuzz'
//         }

//         else {
//             return null
//         }
//     }


// console.log(fishbuzz(345))

function fizzbuzz(n){
    if(n%3 === 0 && n%5 === 0){
        console.log('FizzBuzz')
    }

    else if(n%5 === 0 ){
        console.log('Fizz')

    }

    else if(n%3 === 0 ){
        console.log('Buzz')
    }

    else{
        console.log(n)
    }
}

fizzbuzz(45)