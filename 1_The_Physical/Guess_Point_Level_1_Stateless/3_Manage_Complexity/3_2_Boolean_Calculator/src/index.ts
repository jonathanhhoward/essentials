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
  const tokens = expr.replace(/\(\b/g, "( ").replace(/\b\)/g, " )").split(" ");

  return expression();

  function expression() {
    let left = term();
    while (true) {
      const token = tokens.shift();
      if (token === "OR") {
        const right = term();
        left ||= right;
      } else {
        token && tokens.unshift(token);
        return left;
      }
    }
  }

  function term() {
    let left = primary();
    while (true) {
      const token = tokens.shift();
      if (token === "AND") {
        const right = primary();
        left &&= right;
      } else {
        token && tokens.unshift(token);
        return left;
      }
    }
  }

  function primary(): boolean {
    const token = tokens.shift();
    if (token === "(") {
      const literal = expression();
      if (tokens.shift() === ")") return literal;
      throw Error("')' expected");
    }
    if (token === "NOT") return !primary();
    if (token === "TRUE") return true;
    if (token === "FALSE") return false;
    throw TypeError("invalid literal");
  }
}
