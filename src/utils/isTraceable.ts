import Exotic from "../types/Exotic.js";
import findProxy from "./findProxy.js";

// un traceable es un objeto o una funcion
// no es un proxy, target ni mock de otro proxy

const isTraceable = (value: unknown): value is Exotic.traceable => {
  const isObject = typeof value === "object";
  const isFunction = typeof value === "function";

  if (!isObject && !isFunction) return false;
  if (value === null) return false;
  if (findProxy(value)) return false;

  return true;
};

export default isTraceable;
