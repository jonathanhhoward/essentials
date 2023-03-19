import { palindrome } from "./index";

describe("palindrome checker", () => {
  it.each(["mom", "wow"])("should return true for palindromes", (x) => {
    expect(palindrome(x)).toBe(true);
  });
});
