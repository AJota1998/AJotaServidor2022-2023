const express = require('express');
const app = express();
const puertoServidor = 3000;

app.set('view engine', 'ejs'); //Indicamos que renderizamos con el motor de plantillas ejs

app.get('/', (req, res) => {
    res.send("Esto es un texto plano devuelto al usuario con SEND")
});

app.get('/:nombre/:edad', (req, res) => {
    // ej: https://ladireccion.com3000/pepe, params = {nombre: 'pepe'}
    let nombreUsuario = req.params.nombre;
    let cuantas = nombreUsuario.length;
    let edad = req.params.edad;
    let resultado = (edad >= 18) ? "mayor de edad" : "menor de edad";
    res.render('index.ejs', {nombreUsuario: nombreUsuario, cuantas: cuantas, edad: edad, resultado: resultado});
    //Por defecto Express busca el archivo .ejs en la subcarpeta views.
});

app.listen(puertoServidor, () => {
    console.log('Servidor escuchando en el puerto 3000');
});