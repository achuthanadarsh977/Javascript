const fetchData = require("../fetchData");

test("result", async () => {
  const result = await fetchData();
  expect(result).toBe("Sam");
});
