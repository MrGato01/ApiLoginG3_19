'use strict'

const { json } = require('body-parser')

var UsuarioModel = require('../models/usuario-model'),
    UsuarioController = () => {}

    UsuarioController.getAll = (req, res, next) => {

        UsuarioModel.getAll((err, rows) => {
        if (err)
        {
            let locals = {
                title : 'Error al consultar a la base de datos',
                description : 'Error en la Sintaxis de SQL',
                error : err
            }

            res.render('error', locals)
        }
        else
        {
            let locals = {
                title : 'Lista de usuarios',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}

UsuarioController.getOne = (req, res, next) => {
    let CodigoUsuario = req.body.CodigoUsuario
    console.log(CodigoUsuario)
    
    UsuarioModel.getOne(CodigoUsuario, (err, rows) => {
        console.log(err, '---', rows)

        if(err) 
        {
            let locals = {
                title : `Error al buscar en el registro con el Id : ${CodigoUsuario}`,
                description : 'Error de sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }
        else
        {
            let locals = {
                title : `Usuario con Id : ${CodigoUsuario}`,
                data : rows
            }
            res.status(200).send(rows.rows)

        }
    })
}

UsuarioController.post = (req, res, next) => {
    let usuario = {

        CodigoUsuario : req.body.CodigoUsuario,
        Nombre : req.body.Nombre,
        Apellido : req.body.Apellido,
        Contrasena : req.body.Contrasena,
        Email : req.body.Email,
        Estado : req.body.Estado,
        ContrasenaExpira : req.body.ContrasenaExpira,
        DiasCaducidad : req.body.DiasCaducidad,
        Rol : req.body.Rol,
        NumeroIntentoIncorrectos : req.body.NumeroIntentoIncorrectos,
    }
    console.log(usuario)

    UsuarioModel.post(usuario, (err) => {
        if(err)
        {
            let locals = {
                title : `Error al insertar datos en el registro con el Id : ${usuario.CodigoUsuario}`,
                description : 'Error de sintaxis SQL',
                error : err
            }
            res.status(520).json(err);

        }
        else 
        {
            res.send('Se ha registrado de forma exitosa')

        }
    })
}

UsuarioController.error404 = (req, res, next) => {
    let error = new Error(),
    locals = {
        title : 'Error 404',
        description : 'Recurso no encontrado',
        error : error
    }
    error.status = 404

    res.render('error', locals)

    next()
}    


module.exports = UsuarioController