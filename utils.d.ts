export type ExtractProperties<ObjectType> = Pick<
  ObjectType,
  ({
    [Property in keyof ObjectType]: ObjectType[Property] extends
      (...arguments: unknown[]) => unknown ? never : Property;
  })[keyof ObjectType]
>;

export type Simplify<T> = { [KeyType in keyof T]: T[KeyType] } & {};
