// Importamos el módulo http
let http = require('http');

// Creamos un servidor con una función con dos parámetros, req la petición y res la respuesta
const server = http.createServer(function(req, res) {

    // Escribimos la cabecera de  la petición con el código estado 200,
    // página satisfactoria y el tipo de contenido 'text/plain'    
    res.writeHead(200), {'content.type': 'text/plain'}

    // enviamos 'Hola mundo'
    res.end('Hola mundo');
    });
    
    // Puerto por el que se escucha
    server.listen(3000)
    console.log('Server listening on http://localhost 3000');