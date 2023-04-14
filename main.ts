import { Data } from "./Data.ts";
import { ExtractProperties, Simplify } from "./utils.d.ts";
import "./DebuggableData.ts";
import "./DisplayableData.ts";

const d = Data.make({ a: "aaaa", b: 3 });
console.log(d.debug());
console.log(d.toString());

// debug: () => `Data { a: ${d.a} b: ${d.b} }`,
// toString: () => `{ a: ${d.a} b: ${d.b}}`
