

const add = require('./math')

function calculatetax(price,tax){
    return add(price,tax)
}

module.exports = calculatetax

