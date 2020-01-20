const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')

mongoose.connect('mongodb+srv://pandora_admin:1231234@pandora-bd0v8.azure.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()
const server = http.Server(app)

const routes = require('./routes.js')
const { setupWebsocket } = require('./websocket.js')

setupWebsocket(server)

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333)