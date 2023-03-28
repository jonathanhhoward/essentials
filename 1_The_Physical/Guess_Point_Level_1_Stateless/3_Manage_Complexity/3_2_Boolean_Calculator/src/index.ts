/*
 *  Boolean Expression Grammar
 *
 *    Expression:
 *      Term ['OR' Term]
 *    Term:
 *      Primary ['AND' Primary]
 *    Primary:
 *      Literal | '(' Expression ')' | 'NOT' Primary
 *    Literal:
 *      'TRUE' | 'FALSE'
 */

export function calculate(expr: string): boolean {
  const tokens = expr.split(" ");
  if (tokens[0] === "NOT") return !calculate(tokens[1]);
  if (tokens[0] === "TRUE") return true;
  if (tokens[0] === "FALSE") return false;
  throw TypeError("invalid literal");
}
