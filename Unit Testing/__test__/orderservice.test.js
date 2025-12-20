import { placeOrder } from "./placeOrder";
import paymentService from "./paymentService";

jest.mock("./paymentService", () => ({
  __esModule: true,
  default: {
    charge: jest.fn()
  }
}));

describe("placeOrder", () => {
  it("should charge payment service with correct amount", () => {
    placeOrder({ amount: 500 });

    expect(paymentService.charge).toHaveBeenCalledWith(500);
    expect(paymentService.charge).toHaveBeenCalledTimes(1);
  });
});
