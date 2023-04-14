import { Data, type data } from "./Data.ts";
import { Display } from "./Display.ts";

declare module "./Data.ts" {
  interface Data extends Display {}
}

Data.prototype.toString = function (this: data) {
  return `{ a: ${this.a} b: ${this.b} }`;
};
