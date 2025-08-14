

const circle = {
    radius : 1,
    pi : 3.14,
    type : {
        first_circle : 'circle1',
        second_circle : 'circle2'
    },

    location:{
        first_name : 'first_circle',
        second_name : 'second_circle'
    }

}

circle['area'] = circle.radius * circle.pi
console.log(circle)

console.log(typeof circle['location'])

