 const { Router } =  require("express")
 const router = Router() 

const Book = require('../model/book')

 router.get('/book', async (req, res) => {
   const books = await Book.find()
   res.json( books )
})

router.post('/book', async (req, res) => {
   const { nombre, edicion } = req.body
   const book = new Book({nombre, edicion })
   const result = await book.save() 
   res.json({ msg: "libro agregado", result });
});

router.delete('/book/:id', async (req, res) => {
   const { id } = req.params
   const result = await Book.deleteOne({ _id: id })
   res.json({ msg:'libro eliminado', result})
})

router.get('/book/:id', async (req, res) => {
   const { id } = req.params 
   const books = await Book.findOne({ _id: id })
   res.json( books )
})

router.put('/book', async (req, res) => {
   const {id, nombre, edicion } = req.body
   const result = await Book.updateOne({_id:id}, {$set:{nombre, edicion}})
   res.json({ msg: "libro actualizado", result})
})

 module.exports = router