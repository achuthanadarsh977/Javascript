const { result } = require("lodash");
const canDrive = require("../CanDrive");

describe("Can Drive", () => {
  it("Driver 1", () => {
    expect(canDrive(20, "US")).toBe(true);
  });

  it.each([
    { age: 15, country: "US", expected: false },
    { age: 18, country: "India", expected: true },
    { age: 16, country: "UK", expected: false },
  ])(
    "returns $expected for age=$age in country=$country",
    ({ age, country, expected }) => {
      expect(canDrive(age, country)).toBe(expected);
    },
  );
});
