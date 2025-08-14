const car1 = ['Volvo','Toyota','Honda','Audi'];

const car2 = new Array('BMW','Jeep','Volkswagen')

const car3 = [car1+","+car2]

console.log(car3)

console.log(typeof car3)

car1.push('BMW','Volvo')
car1.splice('Audi')
car1.unshift('Lambo')
console.log(car1)

console.log(car1.indexOf('Volvo'))
console.log(car1.lastIndexOf('Volvo'))