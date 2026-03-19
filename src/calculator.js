function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function mod(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero");
  }
  return a % b;
}

function sqrt(a) {
  if (a < 0) {
    throw new Error("Cannot calculate square root of negative number");
  }
  return Math.sqrt(a);
}

function abs(a) {
  return Math.abs(a);
}

module.exports = { add, subtract, multiply, divide, power, mod, sqrt, abs };
