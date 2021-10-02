const express = require('express')
const app = express()
const router = require('./routes')

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use('/', express.static('public'))

app.use('/api', router)

const PORT = process.env.PORT || 8080
const SERVER = app.listen(PORT, ()=> console.log(`Servidor en puerto: ${PORT}`))

SERVER.on('error', error => console.log(`Error en servidor  ${error}`))

