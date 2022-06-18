"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
  static sum(a, b) {
    return this.action(a, b, "+");
  }
  static minus(a, b) {
    return this.action(a, b, "-");
  }
  static multiply(a, b) {
    return this.action(a, b, "*");
  }
  static divide(a, b) {
    return this.action(a, b, "/");
  }
  static module(a, b) {
    return this.action(a, b, "%");
  }
  static action(a, b, action) {
    let actionString = a + action + b;
    return eval(actionString);
  }
}
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map
