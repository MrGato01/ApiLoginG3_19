"use strict";

// rutas de pedido
var PedidoController = require("../controllers/pedido-controller"),
    ProductoController = require("../controllers/producto-controller"),
    ClienteController = require("../controllers/cliente-controller"),
  express = require("express"),
  router = express.Router();

  router

   .get("/pedido/getAll", PedidoController.getAll)
   .post("/pedido/getOne/:NumeroPedido", PedidoController.getOne)
   .post("/pedido/post", PedidoController.post)
   .put("/pedido/put/:NumeroPedido", PedidoController.put)
   .delete("/pedido/delete/:NumeroPedido", PedidoController.delete)

   // rutas de producto

   .get("/producto/getAll", ProductoController.getAll)
   .post("/producto/getOne/:numeroPedido", ProductoController.getOne)
   .post("/producto/insertar", ProductoController.post)
   .put("/producto/put/:numeroPedido", ProductoController.put)
   .delete("/producto/delete/:numeroPedido", ProductoController.delete)

   .get("/cliente/getAll", ClienteController.getAll)
   .post("/cliente/getOne/:numero_cliente", ClienteController.getOne)
   .post("/cliente/insertar", ClienteController.post)
   .put("/cliente/put/:numero_cliente", ClienteController.put)
   .delete("/cliente/delete/:numero_cliente", ClienteController.delete)

   .use(PedidoController.error404)
   .use(ProductoController.error404)
   .use(ClienteController.error404)

  module.exports = router;




