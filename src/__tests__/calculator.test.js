const { add, subtract, multiply, divide, power, mod } = require("../calculator");

describe("Calculator", () => {
  describe("add", () => {
    test("adds two positive numbers", () => {
      expect(add(2, 3)).toBe(5);
    });
    test("adds negative numbers", () => {
      expect(add(-1, -2)).toBe(-3);
    });
  });

  describe("subtract", () => {
    test("subtracts two numbers", () => {
      expect(subtract(5, 3)).toBe(2);
    });
  });

  describe("multiply", () => {
    test("multiplies two numbers", () => {
      expect(multiply(4, 3)).toBe(12);
    });
    test("multiplies by zero", () => {
      expect(multiply(5, 0)).toBe(0);
    });
  });

  describe("divide", () => {
    test("divides two numbers", () => {
      expect(divide(10, 2)).toBe(5);
    });
    test("throws on division by zero", () => {
      expect(() => divide(10, 0)).toThrow("Division by zero");
    });
  });

  describe("power", () => {
    test("calculates power", () => {
      expect(power(2, 3)).toBe(8);
    });
    test("power of zero", () => {
      expect(power(5, 0)).toBe(1);
    });
  });

  describe("mod", () => {
    test("calculates modulo", () => {
      expect(mod(10, 3)).toBe(1);
    });
    test("throws on modulo by zero", () => {
      expect(() => mod(10, 0)).toThrow("Modulo by zero");
    });
  });
});
