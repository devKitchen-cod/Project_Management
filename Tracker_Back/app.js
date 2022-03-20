const express = require('express')
const cors = require('cors')
const config = require('./config/default.json')
const PORT = process.env.PORT || config.serverPort
const app = express()

app.use(express.json())
app.use(cors())
app.use(require('morgan')('dev'))

const userRoute = require('./route/user-route')
app.use('/api', userRoute)


app.listen(PORT, () => console.log(`sever started on ${PORT}`))