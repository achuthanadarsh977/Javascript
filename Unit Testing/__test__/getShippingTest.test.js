const getShipping = require("../getShipping");
const getCustomerSync = require("../getCustomerSync");

describe("getCustomerInfo", () => {
  it("should return free shipping if customer live in india", () => {
    jest
      .spyOn(getCustomerSync, "getCustomerSync")
      .mockReturnValue({ id: 2, country: "India" });

    const result = getShipping(1);
    expect(result).toBe("No Shipping");
  });

  it("should return Shipping  available if customer lives in India", () => {
    jest
      .spyOn(getCustomerSync, "getCustomerSync")
      .mockReturnValue({ id: 1, country: "India" });

    const result = getShipping(1);

    expect(result).toBe("No Shipping");
  });
});
