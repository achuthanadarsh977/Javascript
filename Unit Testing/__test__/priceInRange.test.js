const priceInRange = require("../priceInRange");

describe("Price In Range", () => {
  it.each([
    { price: 1002, max: 1006, min: 1000, result: false },
    { price: 1001, max: 2000, min: 1000, result: false },
  ])("returns $result when $scenario", ({ price, max, min, result }) => {
    expect(priceInRange(price, max, min)).toBe(result);
  });
});
