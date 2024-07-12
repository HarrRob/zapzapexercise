import express from 'express'
import path, { dirname } from 'path'
import { getAllVehiclesOfType, getAllVehicleDataHistory } from './src/utilities/repository.js'
import {getBCR} from './src/tasks/task5.js'
import {getMinimumBatteryLevel} from './src/tasks/task6.js'
import { overallDistance,calculateSpeed } from './src/tasks/task4.js'
const app = express()
const port = 3000

app.use(express.json())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (request, response) => {
  response.sendFile(path.join(path.resolve(), 'src/examples/index.html'))
})

app.get('/hello-world', (request, response) => {
  response.send('Hello World!')
})
app.get('test', (request, response) => {
  response.send('this is a test!')
})

app.post('/hello-world', (request, response) => {
  response.send({ requestBody: request.body })
})

app.get('/vehicles', async (request, response) => {
  const vehicles = await getAllVehiclesOfType("CAR");
  for(var i=0;i<vehicles.length;i++)
    {
      const id = vehicles[i]._id;
      const dataHistory =  await getAllVehicleDataHistory(id);
      const batteryConsumption = getBCR(dataHistory);
      const remainingBatteryLevel = getMinimumBatteryLevel(dataHistory);
      const estimatedDistance = remainingBatteryLevel / batteryConsumption;

      vehicles[i].batteryConsumption = batteryConsumption
      vehicles[i].overallDistance = overallDistance(dataHistory)
      vehicles[i].batteryPercentageLeft = remainingBatteryLevel
      vehicles[i].speed = Math.round(calculateSpeed(dataHistory)) 
      vehicles[i].estimatedDistance = estimatedDistance
      

    }  
  response.send(vehicles)
})
