
// console.log(true === 1)
// console.log(true == 1)


// let points = 100

// let track = points > 10
// console.log(track)


function consoleAge(age){

    return age > 18 ? "Adult" : "Minor"

}

console.log(consoleAge(15))

console.log(consoleAge(19))

function weekday(day){
    return (day === 1) ? "Sunday":
    (day == 2) ? "Monday":
    (day == 3) ? "Tuesday":
    (day == 4) ? "Wednesday":
    (day == 5) ? "Thursday":
    (day == 6) ? "Friday":
    (day == 7) ? "Saturday":
    "Default"
}

console.log(weekday(5))
