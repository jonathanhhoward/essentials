import { palindrome } from "./index";

describe("palindrome checker", () => {
  it.each(["mom", "wow"])("should return true for palindromes", (x) => {
    expect(palindrome(x)).toBe(true);
  });

  it.each(["tin", "ant"])("should return false for non-palindromes", (x) => {
    expect(palindrome(x)).toBe(false);
  });
});
