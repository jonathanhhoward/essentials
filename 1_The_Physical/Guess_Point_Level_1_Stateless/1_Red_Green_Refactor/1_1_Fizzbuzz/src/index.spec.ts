import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it.each([1, 4, 8])(
    "should change non-multiples of 3 and/or 5 to a string",
    (x) => {
      expect(fizzbuzz(x)).toBe(x.toString());
    }
  );
});
