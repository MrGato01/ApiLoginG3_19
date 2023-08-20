"use strict"

var conn = require("../config/db-connection"),
 ListaUsuariosModelo = () => {};

 ListaUsuariosModelo.getAll = (cb) => conn.query('SELECT * FROM public."usuario"', cb);


module.exports = ListaUsuariosModelo;