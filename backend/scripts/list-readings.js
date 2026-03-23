import { getLatestReadings } from "../src/readingsService.js";

async function main() {
  try {
    const result = await getLatestReadings();
    console.log(JSON.stringify(result.items, null, 2));
  } catch (error) {
    console.error("Failed to fetch readings:", error.message);
    process.exitCode = 1;
  }
}

main();
