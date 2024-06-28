import { getAllVehiclesOfTypeCar } from '../utilities/repository.js'

export function setInactiveVehiclesToNotVisible(vehicles) {
    return [];
}

export async function run() {
    // Get vehicle from the DB
    const vehicles = await getAllVehiclesOfTypeCar();

    // Get all vehicles counts on make 
    const inactiveVehicles = setInactiveVehiclesToNotVisible(vehicles);

    console.log("inactiveVehicles: ");
    console.log(inactiveVehicles);
}
