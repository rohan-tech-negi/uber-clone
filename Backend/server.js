const http = require('http')
const app = reqwuire("./app")
const port = process.env.PORT || 3000


const server = http.createServer(app)

server.listen(3000)