import PocketBase from 'pocketbase';

// Connect to your PocketBase server
const pb = new PocketBase('https://smartgreenhouse.daust.cloud');

// POST a new reading
async function createReading(data) {
    try {
        const record = await pb.collection('readings').create(data);
        console.log('New reading created:', record);
    } catch (error) {
        console.error('Error creating reading:', error);
    }
}

// GET a list of readings
async function getReadings() {
    try {
        const records = await pb.collection('readings').getFullList({
            sort: '-created',
        });
        console.log('All readings:', records);
    } catch (error) {
        console.error('Error fetching readings:', error);
    }
}

// Example usage:

// 1. Create a new reading
/*await createReading({
    temperature: 24.5,
    humidity: 60,
    soil_moisture: 500,
    light_intensity: 80
});*/

// 2. Fetch all readings
await getReadings();
