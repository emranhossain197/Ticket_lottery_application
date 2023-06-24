require("dotenv").config()
const http = require("http");
const app = require('./app/app')

const PORT = process.env.PORT || 4444;

const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Server runing on port: localhost:${PORT}`)
})