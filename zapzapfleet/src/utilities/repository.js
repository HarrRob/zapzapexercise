import mongodb from 'mongodb'
const uri = "mongodb://127.0.0.1:27017";
const client = new mongodb.MongoClient(uri);

const dbName = 'zapzap'

export async function getAllVehiclesOfTypeCar() {
    return getAllVehiclesOfType("CAR");
}

export async function getAllVehiclesOfType(type) {
    try {
        await client.connect();
        // Get the database and collection on which to run the operation
        const database = client.db(dbName);
        const vehicle_repository = database.collection("vehicle");

        // Query for all vehicles
        const query = { assetType: type };

        // Execute query
        const vehicles = await vehicle_repository.find(query).toArray();

        // Return found vehicles
        return vehicles;
    } catch (err) {
        console.error(err.stack);
    } finally {
        await client.close();
    }
}