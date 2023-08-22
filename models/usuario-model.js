"use strict"

var conn = require("../config/db-connection"),
 UsuarioModel = () => {};
 
    UsuarioModel.post = (data, usuario) => 
    conn.query( "call public.sp_usuario_insert ($1,$2,$3,$4,$5,$6,$7,$8,$9)",
    [
      data.CodigoUsuario,
      data.Nombre,
      data.Apellido,
      data.Contrasena,
      data.Email,
      data.Estado,
      data.ContrasenaExpira,
      data.DiasCaducidad,
      data.Rol
    ],
    usuario);


    UsuarioModel.getOne = (codigousuario,contrasena ,cb)=>
    conn.query('SELECT *  FROM public."usuario" WHERE "codigousuario" = $1 AND "contrasena"= $2 AND "estado"=true ', [codigousuario,contrasena],cb);


module.exports = UsuarioModel;