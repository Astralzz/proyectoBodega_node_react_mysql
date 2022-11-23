import { Router } from "express";
import {
  actualizarClienteById,
  contadorTablaClientes,
  crearCliente,
  eliminarClienteById,
  getClienteById,
  getListaClientes,
} from "../controllers/clientes";

//Control de rutas
const routersClientes = Router();

//Rutas get:obtener
routersClientes.get("/clientes", getListaClientes); // Todas las tareas
routersClientes.get("/clientes/total", contadorTablaClientes); //Tareas en total
routersClientes.get("/cliente/:id", getClienteById); //Tarea por id
//Rutas post:enviar
routersClientes.post("/cliente/crear", crearCliente); //Enviar
//Rutas delete:eliminar
routersClientes.delete("/cliente/eliminar/:id", eliminarClienteById); //Eliminar por id
//Rutas put:actualizar
routersClientes.put("/cliente/actualizar/:id", actualizarClienteById); //Actualizar

export default routersClientes;
