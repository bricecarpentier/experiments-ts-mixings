import { Data, type data } from "./Data.ts";
import type { Debug } from "./Debug.ts";

declare module "./Data.ts" {
  interface Data extends Debug {}
}

Data.prototype.debug = function (this: data) {
  return `Data { a: ${this.a} b: ${this.b} }`;
};
