function isValidUser(email, password) {
  if (
    typeof email === String &&
    email.includes("@") &&
    typeof password === String &&
    password.length <= 10
  ) {
    return true;
  }

  return false;
}

module.exports = isValidUser;
