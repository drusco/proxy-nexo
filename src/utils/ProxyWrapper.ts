import type nx from "../types/Nexo.js";
import NexoEmitter from "../events/NexoEmitter.js";
import map from "./maps.js";
import Nexo from "../Nexo.js";

class ProxyWrapper extends NexoEmitter {
  readonly proxy: nx.Proxy;

  constructor(proxy: nx.Proxy) {
    super();
    this.proxy = proxy;
  }

  private get data(): nx.proxy.data {
    return map.proxies.get(this.proxy);
  }

  get id(): string {
    return this.data.id;
  }

  get target(): nx.traceable | void {
    return this.data.target;
  }

  get nexo(): Nexo {
    return this.data.nexo;
  }

  get fn(): nx.voidFunction {
    return this.data.fn;
  }

  revoke(): void {
    this.data.revoke();
    this.data.revoked = true;
  }

  get revoked(): boolean {
    return this.data.revoked;
  }
}

export default ProxyWrapper;
