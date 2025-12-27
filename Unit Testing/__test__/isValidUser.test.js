const isValidUser = require("../isValidUser");

describe("Valid Users", () => {
  it("User 1", () => {
    expect(isValidUser("test@gmail.com", "dude049856")).toBe(false);
  });

  it("User 2", () => {
    expect(isValidUser("user.gmail.com", "dad37374575053535-")).toBe(false);
  });
});
