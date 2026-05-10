function validateLogin({ email, password }) {
  const errors = {};

  if (!email || !email.includes("@")) {
    errors.email = "Invalid email format";
  }

  if (!password || password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  
  return errors;
}
