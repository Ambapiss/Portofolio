const http = require('http')

const port = 5000
const host = 'localhost'

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html')
    response.statusCode = 200


const {method} = request

//GET
if (method == "GET") {
    response.write('Mari belajar HTTP Servers')
}

//post
else if(method =="POST") {
    response.write('seharusnya mendapatkan nama kamu')
}

//PUT
else if (method == "PUT") {
    response.write('seharusnya mengubah harga kopi')
}

//DELETE
else if (method == "DELETE") {
    response.write('seharusnya stok barang habis')
}

response.end('<h1>Cihuyyy</h1>')
}

const server=http.createServer(requestListener)

server.listen(port,host, ()=> {
    console.log(`Server berjalan di ${host}:${port}`)
})