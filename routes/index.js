var router = require('express').Router()
var productos = require('./productos.js')

router.use('/productos', productos)

router.get('/', function (req, res) {
    res.status(200).json({ message: 'API funcionando correctamente' })
})

module.exports = router