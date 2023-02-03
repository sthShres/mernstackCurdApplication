const express = require('express')
const dbConnect = require('./dbConnect')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const itemsRoute = require('./routes/itemsRoutes')

app.use('/api/items/', itemsRoute)
const port = 4000

app.get('/', (req, res) => res.send('Hello world!'))
app.listen(port, ()=> console.log(`Node js server running ${port}!`))