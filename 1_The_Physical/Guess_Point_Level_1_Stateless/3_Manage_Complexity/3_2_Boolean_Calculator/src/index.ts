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
  return true;
}
