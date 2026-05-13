type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type Result1 = UnwrapPromise<Promise<string>>;
type Result2 = UnwrapPromise<number>;

let value1: Result1 = "Hello";
let value2: Result2 = 100;

console.log(value1);
console.log(value2);