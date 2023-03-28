import { calculate } from "./index";

describe("boolean calculator", () => {
  it("should evaluate 'TRUE' as true", () => {
    expect(calculate("TRUE")).toBe(true);
  });

  it("should evaluate 'FALSE' as false", () => {
    expect(calculate("FALSE")).toBe(false);
  });
});
