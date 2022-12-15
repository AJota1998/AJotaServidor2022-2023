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
        dni: req.body.formUsuarioDNI,
        nombre: req.body.formUsuarioNombre,
        apellidos: req.body.formUsuarioApellidos,
        password: req.body.formUsuarioPassword,
        email: req.body.formUsuarioEmail,
        telefono: req.body.formUsuarioTelefono
    };

    baseDeDatos.validarDNI(usuario.dni).then( (mensajeResultante) => {
        res.render('usuariocreado.ejs', {dniUsuarioReg: usuario.dni, nombreUsuarioReg: usuario.nombre, apellidosUsuarioReg: usuario.apellidos,
        passUsuarioReg: usuario.password, emailUsuarioReg: usuario.email, telefonoUsuarioReg: usuario.telefono});
    }).catch((mensajeResultante) => {
        res.render('usuarioerr.ejs', {mensajeError: mensajeResultante});
    });
});

app.listen(8000, () => {
    console.log('listening on port 8000');
});