import PocketBase from "pocketbase";
import { config } from "./config.js";

export function getPocketBaseClient() {
  return new PocketBase(config.pocketBaseUrl);
}
