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

type Token = "TRUE" | "FALSE" | "OR" | "AND" | "NOT" | "(" | ")";

class TokenBuffer {
  private buffer: Token[];

  constructor(expr: string) {
    this.buffer = expr
      .replace(/\(/g, "( ")
      .replace(/\)/g, " )")
      .split(" ") as Token[];
  }

  next(): Token | undefined {
    return this.buffer.shift();
  }

  replace(token: Token | undefined): void {
    token && this.buffer.unshift(token);
  }
}

export function calculate(expr: string): boolean {
  const tokens = new TokenBuffer(expr);
  const result = expression();
  const token = tokens.next();
  if (token === ")") throw Error("')' unmatched");
  if (token) throw Error("invalid expression");
  return result;

  function expression(): boolean {
    let left = term();
    while (true) {
      const token = tokens.next();
      if (token === "OR") {
        const right = term();
        left ||= right;
      } else {
        tokens.replace(token);
        return left;
      }
    }
  }

  function term(): boolean {
    let left = primary();
    while (true) {
      const token = tokens.next();
      if (token === "AND") {
        const right = primary();
        left &&= right;
      } else {
        tokens.replace(token);
        return left;
      }
    }
  }

  function primary(): boolean {
    const token = tokens.next();
    if (token === "(") {
      const literal = expression();
      if (tokens.next() === ")") return literal;
      throw Error("')' expected");
    }
    if (token === "NOT") return !primary();
    if (token === "TRUE") return true;
    if (token === "FALSE") return false;
    throw Error("invalid literal");
  }
}
