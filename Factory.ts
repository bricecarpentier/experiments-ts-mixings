// deno-lint-ignore no-explicit-any
type Constructor = new (...args: any[]) => any;


export function Factory<T extends Constructor>(Klass: T) {
  return (...args: ConstructorParameters<T>) => new Klass(...args)
}


