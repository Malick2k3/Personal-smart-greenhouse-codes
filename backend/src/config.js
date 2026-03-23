import "dotenv/config";

const pocketBaseUrl =
  process.env.POCKETBASE_URL || "https://smartgreenhouse.daust.cloud";

export const config = {
  pocketBaseUrl,
};
