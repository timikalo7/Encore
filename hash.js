const bcrypt = require("bcryptjs");

const password = "123456";
bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) throw err;
  console.log(hashedPassword);
});
