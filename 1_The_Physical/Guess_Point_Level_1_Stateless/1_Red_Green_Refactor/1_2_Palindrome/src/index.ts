export function palindrome(phrase: string): boolean {
  return phrase === phrase.split("").reverse().join("");
}
