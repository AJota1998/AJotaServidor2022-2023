const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const baseDeDatos = require('./public/baseDeDatos.js');


app.get('/', (req, res) => {
    res.render('formulario.ejs');
});

app.post('/usuario', (req, res) => {
    let usuario = {
        nombre: req.body.formUsuarioNombre,
        password: req.body.formUsuarioPassword,
        email: req.body.formUsuarioEmail
    };

    baseDeDatos.validarUsuario(usuario.nombre).then( (mensajeResultante) => {
        res.render('usuariocreado.ejs', {nombreUsuarioReg: usuario.nombre,
        passUsuarioReg: usuario.password, emailUsuarioReg: usuario.email});
    }).catch((mensajeResultante) => {
        res.render('usuarioerr.ejs', {mensajeError: mensajeResultante});
    });
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});


