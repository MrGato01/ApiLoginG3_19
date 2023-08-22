'use strict'

const { json } = require('body-parser')

var UsuarioModel = require('../models/usuario-model'),
    UsuarioController = () => {}

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

//apilogin
UsuarioController.getOne = (req, res, next) => {
 
    let codigousuario = req.body.codigousuario,
    contrasena = req.body.contrasena;

    console.log(codigousuario, contrasena)

    UsuarioModel.getOne(codigousuario,contrasena,(err, rows)=> {
        console.log(err, '---',rows)
        if(err){
            let locals = {
                title: `Error al buscar el registro con el id: ${codigousuario}`,
                description: 'Error de sintaxis SQL',
                error:err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title: 'Lista de usuarios',
                data: rows
            }
            res.status(200).send(rows.rows)
        }
    })

};


module.exports = UsuarioController

