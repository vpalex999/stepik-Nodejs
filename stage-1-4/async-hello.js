const fs = require("node:fs");

fs.stat("./async-hello.js", (err, stats) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stats);
  }
});
