const fs = require("node:fs");

try {
  const stats = fs.statSync("./sync-hello.js");
  console.log(stats);
} catch (err) {
  console.log(err);
}
