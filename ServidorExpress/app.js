/* Esto es un primer ejemplo de un Servidor Express
let express = require('express');
let app = express();


app.get('/', function(req, res) {

    res.send('Hola mundo');
});

app.get('/:name', function(req, res) {

    res.send('Hola ' + req.params.name + '!');
})

app.listen(3000, function() {
    console.log('listening on port 3000');
});
*/

/* Otro ejemplo mostrando un json
const express = require('express');
const app = express();
const puertoServidor = 3000;

app.get('/', (request, response) => {
    response.send('Enhorabuena, estás conectado al servidor Express')
});

app.get('/ejemplojson', (req, res) => {
    res.send({
        nombre: 'Juan Juanito Juan',
        edad: 20,
        aficiones: ["cine", "pasear"]
    });
});

app.listen(puertoServidor, () => {
    console.log("Servidor escuchando por el puerto 3000")
});
*/

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/ServidorArchivos'));

app.listen(3000, () => {
    console.log("Servidor funcionando en el puerto 3000")
});