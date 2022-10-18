const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())



const a = require('./controller')

let {getHouses, deleteHouse, createHouse, updateHouse} = require('./controller')


// endpoint listeners
app.get('/api/houses', getHouses)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)
app.delete('/api/houses/:id', deleteHouse)



app.listen(4004, () => console.log('Server is running on port 4004!'))