const crypto = require("crypto");

const start = Date.now();

for (let i = 0; i < 10; i++) {
  crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log(`${i} :`, Date.now() - start);
  });
}
