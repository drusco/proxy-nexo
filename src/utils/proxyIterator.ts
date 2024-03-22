import Nexo from "../lib/types/Nexo.js";

const proxyIterator = function* (scope: Nexo): IterableIterator<Nexo.Proxy> {
  for (const [id, ref] of scope.proxies) {
    const proxy = ref.deref();
    if (proxy) yield proxy;
    else {
      scope.proxies.delete(id);
      scope.emit("nx.delete", id);
    }
  }
};

export default proxyIterator;
