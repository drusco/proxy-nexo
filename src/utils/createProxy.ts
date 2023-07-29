import Exotic from "../types/Exotic";
import map from "./map";
import findProxy from "./findProxy";
import isTraceable from "./isTraceable";
import { globalNamespace } from "./constants";
import * as traps from "./traps";

const createProxy = (
  scope: Exotic.Emulator,
  target: any,
  namespace: Exotic.Namespace = globalNamespace,
  origin?: Exotic.proxy.origin, // the action used to create the proxy
): Exotic.Proxy => {
  // target is already a proxy; no proxy out of proxy; no duplicates
  const currentProxy = findProxy(target);
  if (currentProxy) return currentProxy;

  const data: Exotic.emulator.private = map.emulators.get(scope);
  const { bindings } = data;

  const id = ++data.itemCount;
  const dummy: Exotic.FunctionLike = function () {};
  const traceable = isTraceable(target);
  const { proxy, revoke } = Proxy.revocable(dummy as Exotic.Proxy, traps);

  let group: Exotic.proxy.group = bindings[namespace];

  if (!group) {
    // create the new group
    group = {
      length: 0,
      first: proxy,
      last: proxy,
    };

    data.groupCount += 1;
    bindings[namespace] = group;
    scope.emit("bind", namespace);
  }

  // set the proxy information
  const item: Exotic.emulator.item = {
    id,
    dummy,
    origin,
    target,
    revoke,
    scope,
    sandbox: Object.create(null),
    namespace,
  };

  scope.emit("proxy", {
    id,
    proxy,
    origin,
    namespace,
  });

  group.length += 1;
  data.activeItems += 1;

  map.dummies.set(dummy, proxy);
  map.proxies.set(proxy, item);

  if (traceable) {
    map.targets.set(target, proxy);
  }

  return proxy;
};

export default createProxy;
