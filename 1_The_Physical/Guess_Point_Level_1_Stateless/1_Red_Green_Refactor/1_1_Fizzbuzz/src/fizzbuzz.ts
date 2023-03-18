export function fizzbuzz(n: number): string {
  if (n < 1 || 100 < n) throw RangeError("Number must be from 1 to 100");
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 5 === 0) return "Buzz";
  if (n % 3 === 0) return "Fizz";
  return n.toString();
}
