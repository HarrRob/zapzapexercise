import express from 'express'
import path, { dirname } from 'path'
import { getAllVehiclesOfType } from '../utilities/repository.js'
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

app.post('/hello-world', (request, response) => {
  response.send({ requestBody: req.body })
})

app.get('/vehicles', async (request, response) => {
  const vehicles = await getAllVehiclesOfType("CAR");
  response.send(vehicles)
})
