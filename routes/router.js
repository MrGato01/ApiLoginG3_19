"use strict";

const ListaUsuariosModelo = require("../models/listaUsuarios-model");

var UsuarioController = require("../controllers/usuario-controller"),
    ListaUsuariosController = require("../controllers/listaUsuarios-controller"),
  express = require("express"),
  router = express.Router();

  router
  
   .get("/listaUsuarios/getAll", ListaUsuariosController.getAll)
   .post("/usuario/post", UsuarioController.post)

   .use(UsuarioController.error404)

  module.exports = router;




