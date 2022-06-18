import { Calculator } from "../calculator";

describe("test calculator", () => {
  it("10 + 20 = 30", () => {
    expect(Calculator.sum(10, 20)).toBe(30);
  });

  it("100 - 20 = 80", () => {
    expect(Calculator.minus(100, 20)).toBe(80);
  });

  it("10 * 20 = 200", () => {
    expect(Calculator.multiply(10, 20)).toBe(200);
  });

  it("20 / 10 = 2", () => {
    expect(Calculator.divide(20, 10)).toBe(2);
  });

  it("5 % 3 = 2", () => {
    expect(Calculator.module(5, 3)).toBe(2);
  });
});
