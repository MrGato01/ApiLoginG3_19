'use strict'

const { json } = require('body-parser')

var LoginUsuarioModel = require('../models/loginusuario-model'),
LoginUsuarioController = () => {}

LoginUsuarioController.post = (req, res, next) => {
 
    let codigousuario = req.body.codigousuario,
    contrasena = req.body.contrasena;

    console.log(codigousuario, contrasena)

    LoginUsuarioModel.post(codigousuario, contrasena, (err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Error en la consulta de autenticación.' });
        } else {
            if (rows.length > 0) {
                // Usuario autenticado, enviar respuesta exitosa
                res.status(200).json({ autenticado: true });
            } else {
                // Usuario no autenticado, enviar respuesta con error
                res.status(401).json({ autenticado: false });
            }
        }
    });

};

module.exports = LoginUsuarioController