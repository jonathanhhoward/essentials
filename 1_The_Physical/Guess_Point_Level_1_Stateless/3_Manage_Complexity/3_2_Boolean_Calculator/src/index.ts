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
  const tokens = getTokenList(expr);
  const result = expression();
  const token = getToken(tokens);
  if (token === ")") throw Error("')' unmatched");
  if (token) throw Error("invalid expression");
  return result;

  function expression() {
    let left = term();
    while (true) {
      const token = getToken(tokens);
      if (token === "OR") {
        const right = term();
        left ||= right;
      } else {
        putBack(tokens, token);
        return left;
      }
    }
  }

  function term() {
    let left = primary();
    while (true) {
      const token = getToken(tokens);
      if (token === "AND") {
        const right = primary();
        left &&= right;
      } else {
        putBack(tokens, token);
        return left;
      }
    }
  }

  function primary(): boolean {
    const token = getToken(tokens);
    if (token === "(") {
      const literal = expression();
      if (getToken(tokens) === ")") return literal;
      throw Error("')' expected");
    }
    if (token === "NOT") return !primary();
    if (token === "TRUE") return true;
    if (token === "FALSE") return false;
    throw TypeError("invalid literal");
  }
}

function getTokenList(expr: string): string[] {
  return expr.replace(/\(/g, "( ").replace(/\)/g, " )").split(" ");
}

function getToken(tokens: string[]): string | undefined {
  return tokens.shift();
}

function putBack(tokens: string[], token: string | undefined): void {
  token && tokens.unshift(token);
}
