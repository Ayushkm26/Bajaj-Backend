exports.validateInput = (key, value) => {
  if (key === "fibonacci" && Number.isInteger(value) && value >= 0) {
    return true;
  }

  if (
    ["prime", "lcm", "hcf"].includes(key) &&
    Array.isArray(value) &&
    value.length > 0 &&
    value.every(num => Number.isInteger(num))
  ) {
    return true;
  }

  if (
    key === "AI" &&
    typeof value === "string" &&
    value.trim().length > 0
  ) {
    return true;
  }

  return false;
};
