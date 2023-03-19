export function palindrome(phrase: string): boolean {
  const normalise = phrase.toLowerCase();
  return normalise === normalise.split("").reverse().join("");
}
