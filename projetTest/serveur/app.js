const http = require('http');

const server = http.createServer(
    function(request, response) {
        response.writeHead(200);
        response.end("hello world");
    });

    server.listen(4000, () =>
    console.log('Adresse du serrveur : http://localhost:4000')
);
