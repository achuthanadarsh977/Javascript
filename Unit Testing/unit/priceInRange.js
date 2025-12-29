function priceInRange(price, min, max) {
  return price > min && price < max;
}

console.log(priceInRange(1000, 999, 2000));

module.exports = priceInRange;
