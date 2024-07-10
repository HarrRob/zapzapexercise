import { getAllVehicleDataHistory,getAllVehiclesOfTypeCar } from '../utilities/repository.js'

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
export function calculateSpeed(dataHistory)
{
    var speeds = [];


    for(var i =0;i<dataHistory.length-1;i++)
    {
        const timestap1 = dataHistory[i].timestamp;
        const timestamp2 = dataHistory[i+1].timestamp;
        const difference = timestamp2.getTime()-timestap1.getTime();
        var hoursDifference = Math.floor(difference/1000/60/60);
        const distance = dataHistory[i+1].distance;
        speeds.push(distance/hoursDifference);


    }
    var total = 0;
    for(var x=0;x<speeds.length;x++)
    {
        total = total + speeds[x];
    }
    total = total/speeds.length;
    return total;    
}
export function overallDistance(dataHistory)
{
    var total =0;
    for(var x = 0;x<dataHistory.length;x++)
    {
        total += dataHistory[x].distance;        
    }
    return total;
}
export function formatJson(distance, speed)
{
    return {totalDistance: distance, averageSpeed: speed}
}
export async function run() {
    // Get vehicle from the DB
    const vehicles = await getAllVehiclesOfTypeCar();
    for(var i=0;i<vehicles.length;i++)
    {
        const id = vehicles[i]._id;
    const dataHistory = await getAllVehicleDataHistory(id);
    const speed = calculateSpeed(dataHistory);
    const distance = overallDistance(dataHistory);
    const json = formatJson(distance, speed);
    console.log(json);
    }
    

    // Get all vehicles counts on make 

}
