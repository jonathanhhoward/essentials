export function palindrome(phrase: string): boolean {
  const normalise = phrase.toLowerCase().replace(/ /g, "");
  return normalise === normalise.split("").reverse().join("");
}
