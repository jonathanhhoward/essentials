import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it.each([1, 4, 8])(
    "should change non-multiples of 3 and/or 5 to a string",
    (x) => {
      expect(fizzbuzz(x)).toBe(x.toString());
    }
  );

  it.each([3, 6, 9])("should change multiples of 3 to 'Fizz'", (x) => {
    expect(fizzbuzz(x)).toBe("Fizz");
  });

  it.each([5, 10, 20])("should change multiples of 5 to 'Buzz'", (x) => {
    expect(fizzbuzz(x)).toBe("Buzz");
  });
});
