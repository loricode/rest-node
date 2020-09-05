const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/books', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('conectado a la db'))
