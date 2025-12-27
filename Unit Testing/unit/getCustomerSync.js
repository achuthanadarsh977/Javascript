function getCustomerSync(id, name) {
  console.log("Reading from the database");
  return { id, name };
}

console.log(getCustomerSync(1, "India"));

module.exports = { getCustomerSync };
