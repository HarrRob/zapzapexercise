import { getAllVehicleDataHistory, getAllVehiclesOfTypeCar } from '../utilities/repository.js';
import { overallDistance,calculateSpeed } from './task4.js';

export function getMinimumBatteryLevel(dataHistory) {
    var lowest = 100;
    for (var i = 0; i < dataHistory.length; i++) {
        if (dataHistory[i].battery_level < lowest) {
            lowest = dataHistory[i].battery_level;
        }
    }
    return lowest;
}

export function getMaximumBatteryLevel(dataHistory) {
    var highest = 0;
    for (var i = 0; i < dataHistory.length; i++) {
        if (dataHistory[i].battery_level > highest) {
            highest = dataHistory[i].battery_level;
        }
    }
    return highest;
}

export async function getBatteryPercentageLeft() {
    let estimatedDistance = 0; 

    const vehicles = await getAllVehiclesOfTypeCar();

    for (var i = 0; i < vehicles.length; i++) {
        const id = vehicles[i]._id;
        const dataHistory =  await getAllVehicleDataHistory(id);
        const batteryConsumption = getBCR(dataHistory);
        const remainingBatteryLevel = getMinimumBatteryLevel(dataHistory);
        estimatedDistance = remainingBatteryLevel / batteryConsumption;
        
        console.log("Registration " +vehicles[i].registration);
        console.log("Overall distance driven "+overallDistance(dataHistory)+"km")
        console.log("Battery percentage left "+ remainingBatteryLevel+"%")
        console.log("Average speed of car "+Math.round(calculateSpeed(dataHistory))+"km/h")
        console.log("Estimated Distance left: "+ estimatedDistance+"km\n");
    }

    // return estimatedDistance;
}

export function getBCR(dataHistory) {
    const lowest = getMinimumBatteryLevel(dataHistory);
    const maximum = getMaximumBatteryLevel(dataHistory);
    const distanceTravelled = overallDistance(dataHistory);
    var batteryConsumption = (maximum - lowest) / distanceTravelled;
    return batteryConsumption;
}

export async function run() {
    const estimatedDistance = await getBatteryPercentageLeft();
}
