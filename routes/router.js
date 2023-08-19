"use strict";

var UsuarioController = require("../controllers/usuario-controller"),
  express = require("express"),
  router = express.Router();

  router
  
   .post("/usuario/post", UsuarioController.post)

   .use(UsuarioController.error404)

  module.exports = router;




