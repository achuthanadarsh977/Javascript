const calculateTotal = require("../calculatetax");

test("calculates total price", () => {
  const result = calculateTotal(100, 20);
  expect(result).toBe(120);
});
