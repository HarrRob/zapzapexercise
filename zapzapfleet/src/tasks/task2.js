import { getAllVehiclesOfTypeCar } from '../utilities/repository.js'

export function getVehicleMakeKPI(vehicles) {
    var temp = {};
    for(var x =0;x<vehicles.length;x++)
    {
        var tempMake;
        tempMake = vehicles[x].make;
        if(!temp[tempMake])
        {
            temp[tempMake] = 1;
        }      
        else
        {
            temp[tempMake]++;
        }

    }
    return temp;
}

export async function run() {
    // Get vehicle from the DB
    const vehicles = await getAllVehiclesOfTypeCar();

    // Get all vehicles counts on make 
    const kpi = getVehicleMakeKPI(vehicles);

    console.log("kpi: ");
    console.log(kpi);
}
