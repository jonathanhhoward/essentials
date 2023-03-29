import { calculate } from "./index";

describe("boolean calculator", () => {
  describe("primary", () => {
    it.each([
      ["TRUE", true],
      ["FALSE", false],
      ["NOT TRUE", false],
    ])("should evaluate '%s' as %s", (expression, expected) => {
      expect(calculate(expression)).toBe(expected);
    });

    it("should throw for invalid literal", () => {
      expect(() => calculate("invalid")).toThrow("invalid literal");
    });
  });

  describe("term", () => {
    it.each([
      ["TRUE AND TRUE", true],
      ["TRUE AND FALSE", false],
      ["FALSE AND TRUE", false],
      ["FALSE AND FALSE", false],
      ["TRUE AND TRUE AND TRUE", true],
      ["FALSE AND TRUE AND TRUE", false],
      ["TRUE AND FALSE AND TRUE", false],
      ["TRUE AND TRUE AND FALSE", false],
      ["FALSE AND FALSE AND FALSE", false],
      ["NOT FALSE AND TRUE", true],
      ["TRUE AND NOT TRUE", false],
      ["NOT FALSE AND NOT FALSE", true],
    ])("should evaluate '%s' as %s", (expression, expected) => {
      expect(calculate(expression)).toBe(expected);
    });
  });

  describe("expression", () => {
    it("should evaluate 'FALSE OR TRUE' as true", () => {
      expect(calculate("FALSE OR TRUE")).toBe(true);
    });
  });
});
