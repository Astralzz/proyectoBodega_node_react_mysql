"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _clientes = require("../controllers/clientes");
//Control de rutas
var routersClientes = (0, _express.Router)();

//Rutas get:obtener
routersClientes.get("/clientes", _clientes.getListaClientes); // Todas las tareas
routersClientes.get("/clientes/count", _clientes.getClienteById); //Tareas en total
routersClientes.get("/clientes/:id", _clientes.contadorClientes); //Tarea por id
//Rutas post:enviar
routersClientes.post("/clientes", _clientes.crearCliente); //Enviar
//Rutas delete:eliminar
routersClientes["delete"]("/clientes/:id", _clientes.eliminarClienteById); //Eliminar por id
//Rutas put:actualizar
routersClientes.put("/clientes/:id", _clientes.actualizarClienteById); //Actualizar
var _default = routersClientes;
exports["default"] = _default;