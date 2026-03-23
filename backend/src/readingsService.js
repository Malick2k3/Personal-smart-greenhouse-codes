import { getPocketBaseClient } from "./pocketbaseClient.js";

export async function createReading(data) {
  const pb = getPocketBaseClient();
  return pb.collection("readings").create(data);
}

export async function getLatestReadings(page = 1, perPage = 10) {
  const pb = getPocketBaseClient();
  return pb.collection("readings").getList(page, perPage, {
    sort: "-created",
  });
}
