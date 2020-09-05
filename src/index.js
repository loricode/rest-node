const express = require('express')
const app = express()
const cors = require('cors')

require('./database/mongodb')

app.set('port', process.env.port || 3000 )

// middleware
app.use(cors())
app.use(express.json())
//rutas 
app.use(require('./routes/route.book'))

app.listen(app.get('port'), () => {
   console.log(`listening localhost:${app.get('port')}`)
})