function v1(string) {
  if (typeof string !== "string") {
    throw new TypeError("Argument passed must be of type string");
  }
  return string ? string[0].toUpperCase() + string.slice(1) : string;
}

module.exports = v1;
