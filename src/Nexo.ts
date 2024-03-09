import Nexo from "./types/Nexo.js";
import EventEmitter from "node:events";

export default class Nexo extends EventEmitter implements Nexo.Emulator {
  constructor(options?: Nexo.emulator.options) {
    console.log("new emulator", options);
    super();
  }
  // use(value?: any): Nexo.Proxy {}
  // link(link: Nexo.key, value?: any): Nexo.Proxy {}
  // target(value?: any): any {}
  // revoke(value: Nexo.traceable): boolean {}
  // encode(value: any): any {}
  // decode(value: any): any {}
  // exec(
  //   method: Nexo.functionLike,
  //   dependencies?: Record<string, Nexo.Proxy>,
  // ): Nexo.Proxy {}
}
