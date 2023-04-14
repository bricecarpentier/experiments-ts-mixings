import { Factory } from "./Factory.ts";
import type { ExtractProperties, Simplify } from "./utils.d.ts";

export class Data implements Data {
  public a: string;
  public b: number;

  constructor(d: data) {
    this.a = d.a;
    this.b = d.b;
  }

  static make = Factory(this)

  static readonly _tag: unique symbol
}

export type data = Simplify<ExtractProperties<Data>>;
