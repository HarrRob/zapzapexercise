import { getAllVehiclesOfTypeCar } from '../utilities/repository.js'

export function validateVehiclesFields(vehicles) {
  const validVehicles =[];
  // Validate vehicles contain make field
    for(var i = 0; i<vehicles.length; i++)
    {
      console.log("foo");
      const temp_vehicle = vehicles[i];
        // if(temp_vehicle.make !== null && temp_vehicle.make !== undefined)
        if(temp_vehicle.make)
        {
            console.log("bar");
            validVehicles.push(temp_vehicle);

        }
        else
        {
          console.log("vehicle does not contain a field");
        }
    }
  // Return validated vehicles
  return validVehicles;
}

export function sortVehiclesByMake(vehicles) {
  // Sort the array in alphabetical order
  var sortedVehicles;
  sortedVehicles = vehicles.sort(function(vehicle1, vehicle2)
  {
    var text1 = vehicle1.make;
    var text2 = vehicle2.make;
    if(text1<text2)
    {
      return -1;
    }
    else if (text1>text2)
    {
      return 1;
    }
    else
    {
      return 0;
    }
  })
  // Return the sorted vehicles
  return sortedVehicles;
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


