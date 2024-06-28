import { getAllVehiclesOfTypeCar } from '../utilities/repository.js'

export function getVehicleMakeKPI(vehicles) {
    return {};
}

export async function run() {
    // Get vehicle from the DB
    const vehicles = await getAllVehiclesOfTypeCar();

    // Get all vehicles counts on make 
    const kpi = getVehicleMakeKPI(vehicles);

    console.log("kpi: ");
    console.log(kpi);
}
