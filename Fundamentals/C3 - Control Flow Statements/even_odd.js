
function even_odd(lim){
    for(let i=0;i<=lim;i++){
        if(i%2 === 0 ){
            console.log(i,'EVEN')
        }

        if(i%2 !== 0 ){
            console.log(i,'ODD')
        }
        
    }
}

console.log(even_odd(23))