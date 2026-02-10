exports.validateInput = (key, value) => {
  if (key === "fibonacci" && Number.isInteger(value)) return true;
  if (["prime", "lcm", "hcf"].includes(key) && Array.isArray(value)) return true;
  if (key === "AI" && typeof value === "string") return true;
  return false;
};
