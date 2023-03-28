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

  if (tokens.length === 3) {
    const left = primary();
    tokens.shift();
    const right = primary();
    return left && right;
  }
  return primary();

  function primary(): boolean {
    const token = tokens.shift();
    if (token === "NOT") return !primary();
    if (token === "TRUE") return true;
    if (token === "FALSE") return false;
    throw TypeError("invalid literal");
  }
}
