const http = require("http");

// Fungsi untuk menangani request
const requestListener = (request, response) => {
    // Set header untuk response
    response.setHeader("Content-Type", "text/html");
    response.setHeader("Powered-By", "Node.js");

    // Destructuring object request
    const { method, url } = request;

    // Route untuk homepage
    if (url === "/") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end("<h1>Ini adalah homepage</h1>");
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`);
        }
    } 
    // Route untuk halaman about
    else if (url === "/about") {
        if (method === "GET") {
            response.statusCode = 200;
            response.end("<h1>Halo! Ini adalah halaman about</h1>");
        } else if (method === "POST") {
            let body = [];

            // Menangani data request
            request.on("data", (chunk) => {
                body.push(chunk);
            });

            // Menangani akhir request
            request.on("end", () => {
                body = Buffer.concat(body).toString();
                try {
                    const { name } = JSON.parse(body);
                    response.statusCode = 200;
                    response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
                } catch (error) {
                    response.statusCode = 400;
                    response.end("<h1>Request tidak valid</h1>");
                }
            });
        } else {
            response.statusCode = 400;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }
    } 
    // Route untuk halaman tidak ditemukan
    else {
        response.statusCode = 404;
        response.end("<h1>Halaman tidak ditemukan!</h1>");
    }
};

// Membuat server
const server = http.createServer(requestListener);

// Konfigurasi server
const port = 10000;
const host = "localhost";

// Menjalankan server
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});