import EventEmitter from "events";

declare namespace Exotic {
  type traceable = object | FunctionLike;
  type key = string;
  type FunctionLike = (...args: any[]) => any;

  interface Emulator extends EventEmitter {
    use(value?: any): Proxy;
    link(ref: key, value?: any): Proxy;
    exec(value: FunctionLike, map?: Record<string, Proxy>): any;
    include(encodedProxy: string, origin: proxy.origin, target?: any): any;
    target(value?: any): any;
    parent(value?: traceable): undefined | Proxy;
    values(value?: traceable): Proxy[];
    keys(value?: traceable): key[];
    revoke(value: traceable): boolean;
    revokeAll(): void;
    isRevoked(value: traceable): boolean;
    entries(): IterableIterator<Proxy>;
    encode(value: any): any;
    decode(value: any): any;
    get(...values: any[]): Promise<any[]>;
    refs: key[];
    length: number;
  }

  namespace emulator {
    interface options {
      traceErrors?: boolean;
      stackTraceLimit?: number;
    }

    interface data {
      options: options;
      refs: Record<key, Proxy>;
      links: Record<key, key>;
      counter: number;
      proxySet: Set<Proxy>;
    }
  }

  interface Mock extends FunctionLike {
    [Symbol.iterator](): IterableIterator<Proxy>;
  }

  interface Proxy extends Mock {
    (...args: any[]): void;
    [x: key]: any;
  }

  namespace proxy {
    interface origin {
      action?: "get" | "set" | "build" | "apply" | "exec" | "link";
      proxy?: Proxy;
      key?: key;
      value?: any;
      that?: any;
      args?: any[];
    }

    interface data {
      revoke(): void;
      id: number;
      revoked: boolean;
      mock: Mock;
      scope: Emulator;
      sandbox: Record<key, any>;
      target?: any;
      origin?: origin;
      key?: key;
    }
  }
}

export default Exotic;
