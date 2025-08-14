

function islandscape(width,height){
    if(height > width){
        return height
    }

    else{
        return width
    }
}

let r = islandscape(100,200)
console.log(r)