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
});
