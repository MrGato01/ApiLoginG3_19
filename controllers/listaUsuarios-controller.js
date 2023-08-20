'use strict'

const { json } = require('body-parser')

var ListaUsuariosModelo = require('../models/listaUsuarios-model'),
    ListaUsuariosController = () => {}

    ListaUsuariosController.getAll = (req, res, next) => {

        ListaUsuariosModelo.getAll((err, rows) => {
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

module.exports = ListaUsuariosController
