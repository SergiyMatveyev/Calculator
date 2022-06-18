export class Calculator {
  static sum(a: number, b: number): number {
    return this.action(a, b, "+");
  }

  static minus(a: number, b: number): number {
    return this.action(a, b, "-");
  }

  static multiply(a: number, b: number): number {
    return this.action(a, b, "*");
  }

  static divide(a: number, b: number): number {
    return this.action(a, b, "/");
  }

  static module(a: number, b: number): number {
    return this.action(a, b, "%");
  }

  private static action(a: number, b: number, action: string): number {
    let actionString = a + action + b;
    return eval(actionString);
  }
}
