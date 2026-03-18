const { add, subtract, multiply, divide } = require("../calculator");

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
});
