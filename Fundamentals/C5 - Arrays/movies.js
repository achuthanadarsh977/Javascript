
const movies = [
    {'title':'a' , 'rating':'TV-MA','genre':'action'},
    {'title':'b' , 'rating':'13+','genre':'romance'},
    {'title':'c' , 'rating':'18+' , 'genre':'gothic-horror'}
]



console.log(movies.filter(m => m.genre === 'action' && m.rating === 'TV-MA'))

console.log(movies.map(n => n.genre === 'action' && n.rating === 'TV-MA'))

console.log(movies.sort((a,b) => a.rating - b.rating))