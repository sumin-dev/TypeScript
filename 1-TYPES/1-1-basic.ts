{
  /**
   * JavaScript
   * Primitive(7): number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array......
   */

  // number
  const num: number = -1;

  // string
  const str: string = "hello";

  // boolean
  const bool: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined; // optional type일 때 사용
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null; // optional type일 때 사용

  // unknown 💩
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 💩

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    /* while(true) {} */
  }
  let neverEnding: never; // 💩

  // object
  let obj: object; // 💩
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "sumin" });
  acceptSomeObject({ animal: "dog" });
}
