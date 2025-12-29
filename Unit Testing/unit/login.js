async function login(password) {
  if (typeof password === "string" && password.length === 8) {
    return "Login Successful";
  }

  throw new Error("Invalid Password");
}

module.exports = login;
