const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;

    const { method, url } = request;

    if (method === 'GET') {
        if (url === '/') {
            response.end("Halaman utama");
        } else if (url === '/greet') {
            response.end("Mari belajar Javascript");
        } else {
            response.end('<h1>Hello!</h1>');
        }
    }

    if (method === 'POST') {
        let body = [];

        request.on("data", (chunk) => {
            body.push(chunk);
        });

        request.on("end", () => {
            body = Buffer.concat(body).toString();
            try {
                const { name } = JSON.parse(body);
                response.end(`Nama: ${name}`);
            } catch (error) {
                response.statusCode = 400;
                response.end("Invalid JSON data");
            }
        });
    }

    if (method === 'PUT') {
        response.end('<h1>Bonjour!</h1>');
    }

    if (method === 'DELETE') {
        response.end('<h1>Salam!</h1>');
    }
};

const server = http.createServer(requestListener);

const port = 7000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});