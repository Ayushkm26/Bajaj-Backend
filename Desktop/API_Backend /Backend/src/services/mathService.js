const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

exports.fibonacci = (n) => {
  const result = [0, 1];
  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.slice(0, n);
};

exports.primeFilter = (arr) => {
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return arr.filter(isPrime);
};

exports.lcm = (arr) => {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
};

exports.hcf = (arr) => {
  return arr.reduce((a, b) => gcd(a, b));
};
