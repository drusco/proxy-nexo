import type nx from "../types/Nexo.js";
import map from "../utils/maps.js";
import ProxyEvent from "../events/ProxyEvent.js";

const isExtensible = (target: nx.traceable): boolean => {
  const proxy = map.tracables.get(target);
  const extensible = Reflect.isExtensible(target);

  new ProxyEvent("isExtensible", { target: proxy, data: extensible });

  return extensible;
};

export default isExtensible;
