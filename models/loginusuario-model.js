"use strict"

var conn = require("../config/db-connection"),
LoginUsuarioModel = () => {};

LoginUsuarioModel.post = (codigousuario,contrasena ,cb)=>
    conn.query('SELECT CodigoUsuario, Contrasena FROM public."usuario" WHERE "codigousuario" = $1 AND "contrasena"= $2 AND "estado"=true ', [codigousuario,contrasena],cb);


module.exports = LoginUsuarioModel;