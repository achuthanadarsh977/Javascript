const validate = require("../validateUserInput");

describe("Username & Password", () => {
  it("User 1", () => {
    expect(validate("User123", 12)).toBe(false);
  });
});
