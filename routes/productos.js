const router = require('express').Router()
const productoController = require ('../controllers/productoController')


const rutaArchivo = './productos.json'
const db =  new productoController(rutaArchivo)


router.get('/', async (req, res) =>{

    const db =  new productoController(rutaArchivo)

    const array = await db.getAll()

    res.json(array)    
})

router.get('/:id', async (req, res) =>{

    const db =  new productoController(rutaArchivo)

    let producto = await db.getById(req.params.id)

    if(producto == null ){
       producto = {
            error: "Producto no encontrado"
       } 
    }
    res.json(producto)
})

router.post('/', async (req, res) =>{
    
    const db =  new productoController(rutaArchivo)
    
    const productoId = await db.save(req.body)

    res.json({
        mensaje: `Guardado correctamente id: ${productoId}`
    })
})

router.put('/:id', async (req, res) =>{
        
    let producto = req.body
    producto.id = req.params.id

    const productoId = await db.save(producto)

    res.json({
        mensaje: `Actualizado correctamente id: ${productoId}`
    })    
})

router.delete('/:id', async (req, res) =>{

    await db.deleteById(req.params.id)

    res.json({mensaje: "Producto eliminado correctamente"})
})

module.exports = router