function validateUserInput(username, age) {
  if (typeof username !== "string" && username.length < 3) {
    return false;
  }

  if (typeof age !== Number && age < 18) {
    return false;
  }

  return true;
}

validateUserInput("User123", 23);

module.exports = validateUserInput;
