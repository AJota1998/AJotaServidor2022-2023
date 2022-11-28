let http = require('http'); 

const server = http.createServer(function(req, res) {
    
    res.writeHead(200), {'content.type': 'text/plain'}
    res.end('Hola mundo');
    });
    
    server.listen(3000)
    console.log('Server listening on http://localhost 3000');