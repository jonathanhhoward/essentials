import { calculate } from "./index";

describe("boolean calculator", () => {
  it("should evaluate 'TRUE' as true", () => {
    expect(calculate("TRUE")).toBe(true);
  });

  it("should evaluate 'FALSE' as false", () => {
    expect(calculate("FALSE")).toBe(false);
  });

  it("should throw for invalid literal", () => {
    expect(() => calculate("invalid")).toThrow("invalid literal");
  });

  it("should evaluate 'NOT TRUE' as false", () => {
    expect(calculate("NOT TRUE")).toBe(false);
  });
});
