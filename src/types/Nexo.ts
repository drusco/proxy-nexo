/* eslint-disable @typescript-eslint/no-explicit-any */

declare namespace Nexo {
  type arrayLike = unknown[];
  type traceable = NonNullable<object>;
  type objectKey = string | symbol;
  type plainObject = Record<objectKey, unknown>;
  type voidFunction = (...args: arrayLike) => void;
  type functionLike = (...args: arrayLike) => any;
  type constructable<T> = new (...args: arrayLike) => T;
  type typeExtends<Type, Base, Final> = Type extends Base ? Final : Type;

  interface Proxy extends functionLike {
    new (...args: arrayLike): any;
    [x: objectKey]: any;
  }

  namespace proxy {
    type handler =
      | "get"
      | "has"
      | "deleteProperty"
      | "getOwnPropertyDescriptor"
      | "set"
      | "defineProperty"
      | "apply"
      | "construct"
      | "getPrototypeOf"
      | "isExtensible"
      | "ownKeys"
      | "preventExtensions"
      | "setPrototypeOf";
  }

  namespace event {
    interface options<Target, Data> {
      target?: Target;
      data?: Data;
      cancelable?: boolean;
    }
  }
}

export default Nexo;
