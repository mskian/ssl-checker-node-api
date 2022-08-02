const sslChecker = require("./lib/cmjs/index.js");

const userdomain = "santhoshveer.com";

sslChecker(userdomain)
  .then((certdata) => {
    console.log(certdata);
  })
  .catch((err) => {
    if (err.code === "ENOTFOUND") {
      console.log("Fix Hostname or Provide Correct Domain Name");
    } else if (err.code === "ECONNREFUSED") {
      console.log("Fix Hostname or Provide Correct Domain Name");
    }
  });
