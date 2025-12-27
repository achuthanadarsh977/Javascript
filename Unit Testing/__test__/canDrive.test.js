const canDrive = require("../CanDrive");

describe("Can Drive", () => {
  it("Driver 1", () => {
    expect(canDrive(20, "US")).toBe(true);
  });

  it("Driver 2", () => {
    expect(canDrive(13, "UK")).toBe(false);
  });
});
