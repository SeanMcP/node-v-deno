const capitalize = require("../../pkg/node/capitalize/v1");

function greeting(name) {
  console.log(`Hello ${capitalize(name)}!`);
}

greeting("node");
