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

  it.each([15, 30, 45])(
    "should change multiples of 3 and 5 to 'FizzBuzz'",
    (x) => {
      expect(fizzbuzz(x)).toBe("FizzBuzz");
    }
  );

  it.each([-1000000, -1, 0, 101, 1000000])(
    "should not accept numbers less than 1 or greater than 100",
    (x) => {
      expect(() => fizzbuzz(x)).toThrow("Number must be from 1 to 100");
    }
  );
});
