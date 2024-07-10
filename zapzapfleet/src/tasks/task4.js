import { getAllVehiclesOfTypeCar } from '../utilities/repository.js'

export function setInactiveVehiclesToNotVisible(vehicles) {
    for(var x =0;x<vehicles.length;x++)
    {
        var tempStatus;
        tempStatus = vehicles[x].status;
        tempStatus.toUpperCase();
        if(tempStatus=="INACTIVE")
        {
            vehicles[x].visible = false;
        }
    }
    return vehicles;
}

export async function run() {
    // Get vehicle from the DB
    const vehicles = await getAllVehiclesOfTypeCar();

    // Get all vehicles counts on make 
    const inactiveVehicles = setInactiveVehiclesToNotVisible(vehicles);

    console.log("inactiveVehicles: ");
    console.log(inactiveVehicles);
}
