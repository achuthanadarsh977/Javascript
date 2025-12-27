const customers = require("./getCustomerSync");

function getShipping(customerID) {
  const customer = customers.getCustomerSync(customerID);

  if (customer.name === "India") {
    return "Free Shipping";
  }

  return "No Shipping";
}

console.log(getShipping(1));

module.exports = getShipping;
