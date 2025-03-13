const http = require('http')

const port = 5000
const host = 'localhost'

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')

        response.statusCode = 200
        response.write('<p>Mari belajar HTTP server </p>')
        response.end(' <h1>Alhamdulillah</h1>')
}

const server=http.createServer(requestListener)

server.listen(port,host, ()=> {
    console.log(`Server berjalan di ${host}:${port}`)
})