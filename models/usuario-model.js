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

module.exports = UsuarioModel;