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
    it.each([
      ["TRUE OR TRUE", true],
      ["TRUE OR FALSE", true],
      ["FALSE OR TRUE", true],
      ["FALSE OR FALSE", false],
      ["TRUE OR TRUE OR TRUE", true],
      ["FALSE OR TRUE OR TRUE", true],
      ["TRUE OR FALSE OR TRUE", true],
      ["TRUE OR TRUE OR FALSE", true],
      ["FALSE OR FALSE OR FALSE", false],
      ["NOT FALSE OR FALSE", true],
      ["TRUE OR NOT TRUE", true],
      ["NOT TRUE OR NOT TRUE", false],
    ])("should evaluate '%s' as %s", (expression, expected) => {
      expect(calculate(expression)).toBe(expected);
    });
  });
});
