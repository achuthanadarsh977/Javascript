const asyncadd = require("../asyncadd");

test("add numbers synchronously", (done) => {
  asyncadd(2, 3, (result) => {
    expect(result).toBe(5);
    done();
  });
});
