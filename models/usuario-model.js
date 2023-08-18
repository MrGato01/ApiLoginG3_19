"use strict"

var conn = require("../config/db-connection"),
 UsuarioModel = () => {};

 UsuarioModel.getAll = (usuario) => conn.query("SELECT * FROM USUARIO", usuario);

 UsuarioModel.getOne = (CodigoUsuario, usuario) => 
  conn.query(
    "SELECT * FROM USUARIO WHERE CODIGOUSUARIO = $1", [CodigoUsuario], usuario);

    UsuarioModel.post = (data, usuario) => 
    conn.query( "call public.sp_usuario_insert ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
    [
      data.CodigoUsuario,
      data.Nombre,
      data.Apellido,
      data.Contrasena,
      data.Email,
      data.Estado,
      data.ContrasenaExpira,
      data.DiasCaducidad,
      data.Rol,
      data.NumeroIntentoIncorrectos
    ],
    usuario);


module.exports = UsuarioModel;