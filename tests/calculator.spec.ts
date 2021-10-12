import { Calculator } from "../src/calculator.js";

describe("calculator", () => {
  it("should add", () => {
    expect(new Calculator().add(1, 2)).toBe(3);
  });
});
