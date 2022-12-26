const express = require('express')
const app = express();
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middlewares/erros')
app.use(express.json())
app.use(cookieParser())
//import all the routes
const topics = require('./routes/topics')
const auth = require('./routes/auth')
const react = require('./routes/react')
const node = require('./routes/node')
const javaScript = require('./routes/javaScript')
app.use('/api/v1', topics)
app.use('/api/v1', react)
app.use('/api/v1', node)
app.use('/api/v1', javaScript)
app.use('/api/v1', auth)
app.use(errorMiddleware);
module.exports = app