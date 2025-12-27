const boundary = require("../boundary");

describe("Boundary values", () => {
  it("Boundary 1", () => {
    expect(boundary(10, 100, 0)).toBe(true);
  });

  it("Boundary 2", () => {
    expect(boundary(200, 100, 0)).toBe(false);
  });
});
