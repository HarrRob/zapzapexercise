import { getAllVehicleDataHistory,getAllVehiclesOfTypeCar } from '../utilities/repository.js'
import {overallDistance} from './task4.js'

export function getMinimumBatteryLevel(dataHistory) {
    var lowest=100
    for(var i=0;i<dataHistory.length;i++)
    {
        if(dataHistory[i].battery_level<lowest)
        {
            lowest = dataHistory[i].battery_level;
        }
    }
    return lowest
    
}
export function getMaximumBatteryLevel(dataHistory)
{
    var max=0
    for(var i=0;i<dataHistory.length;i++)
    {
        if(dataHistory[i].battery_level>max)
        {
            max = dataHistory[i].battery_level;
        }
    }
    return max
}
export function getBCR(dataHistory)
{

    const lowest = getMinimumBatteryLevel(dataHistory);
    const maximum = getMaximumBatteryLevel(dataHistory)
    const distanceTravelled = overallDistance(dataHistory);
    var batteryConsumption = (maximum - lowest) / distanceTravelled;
    console.log(batteryConsumption);
    return batteryConsumption
}

export async function run() {
    // Get vehicle from the DB
    const vehicles = await getAllVehiclesOfTypeCar();
    for(var i=0;i<vehicles.length;i++)
        {
            const id = vehicles[i]._id;
            const dataHistory = await getAllVehicleDataHistory(id);
            const batteryConsumption = await getBCR(dataHistory);
            

        }
        
        

    // Get all vehicles counts on make 

}
