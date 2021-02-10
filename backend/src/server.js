const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes');

const server = express()

const port = 3333

mongoose.connect('mongodb://localhost/restaurantePadreCicero', { useNewUrlParser: true, useUnifiedTopology: true })

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um erro") })
db.once("open", () => { console.log("Banco carregado") })

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(port, () => console.log(`App listening on port ${port}`))