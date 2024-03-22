import { IS_PROXY_ID_REGEXP } from "../lib/constants.js";

export default function isProxyPayload(value: unknown): value is string {
  if (typeof value !== "string") return false;
  return IS_PROXY_ID_REGEXP.test(value);
}
