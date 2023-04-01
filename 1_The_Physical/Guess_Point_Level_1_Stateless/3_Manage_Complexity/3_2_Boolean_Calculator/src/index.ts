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

  let expression = term();
  while (tokens.length) {
    const token = tokens.shift();
    if (token === "OR") {
      const right = term();
      expression ||= right;
    }
  }
  return expression;

  function term() {
    let left = primary();
    while (tokens.length) {
      const token = tokens.shift();
      if (token === "AND") {
        const right = primary();
        left &&= right;
      } else {
        token && tokens.unshift(token);
        return left;
      }
    }
    return left;
  }

  function primary(): boolean {
    const token = tokens.shift();
    if (token === "NOT") return !primary();
    if (token === "TRUE") return true;
    if (token === "FALSE") return false;
    throw TypeError("invalid literal");
  }
}
