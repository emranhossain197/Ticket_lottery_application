require("dotenv").config("../.env")
const express = require('express');
const {NotfoundHandler, errorHandler} = require("../Error/error")

const app = express()


app.use(require('../middleware/middleware'))
app.use(require('../router/router'))

app.use(NotfoundHandler)
app.use(errorHandler)


module.exports = app;