import { getAllVehiclesOfTypeCar } from '../utilities/repository.js'

export function validateVehiclesFields(vehicles) {
  // Validate vehicles contain make field

  // Return validated vehicles
  return []
}

export function sortVehiclesByMake(vehicles) {
  // Sort the array in alphabetical order

  // Return the sorted vehicles
  return [];
}

export async function run() {
  // Get vehicle from the DB
  const vehicles = await getAllVehiclesOfTypeCar();

  // Print all of the vehicles
  console.log("Vehicles read from DB: ");
  console.log(vehicles);

  // Validate vehicles
  const validatedVehicles = validateVehiclesFields(vehicles);

  console.log("Number of vehicles after validation: " + validatedVehicles.length)

  // Sort vehicles by make
  const sortedVehicles = sortVehiclesByMake(validatedVehicles)

  console.log("Sorted vehicles: ");
  console.log(sortedVehicles);
}


