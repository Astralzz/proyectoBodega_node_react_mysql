//CONTROL DE CLIENTES
import conectarByMysql from "../databases/databases";

//Lista de clientes
const getListaClientes = async (req, res) => {
  //Consulta
  const consulta = "SELECT * FROM `clientes`";

  //Conectamos
  const DB = await conectarByMysql();

  //Si no es null
  if (DB !== null) {
    //Obtenemos filas
    const [rows] = await DB.query(consulta);

    //retornamos un JSON
    res.json(rows);
  }

  return null;
};
//Cliente por id
const getClienteById = async (req, res) => {
  //Consulta
  const consulta = "SELECT * FROM `clientes` WHERE id = ?";

  //Conectamos
  const DB = await conectarByMysql();

  //Si no es null
  if (DB !== null) {
    //Obtenemos filas
    const [rows] = await DB.query(consulta, [req.params.id]);

    //Si NO existe
    if (!rows[0]) {
      return null;
    }

    //retornamos un JSON
    res.json(rows[0]);
  }

  return null;
};
//No de datos en la tabla clientes
const contadorTablaClientes = async (req, res) => {
  //Consulta
  const consulta = "SELECT COUNT(*) FROM clientes";

  //Conectamos
  const DB = await conectarByMysql();

  //Si no es null
  if (DB !== null) {
    //Obtenemos filas
    const [rows] = await DB.query(consulta);

    //Si NO existe
    if (!rows[0]["COUNT(*)"]) {
      return null;
    }

    //retornamos un JSON
    res.json(rows[0]["COUNT(*)"]);
  }

  return null;
};
//Crear nuevo cliente
const crearCliente = async (req, res) => {
  //Consulta
  const consulta =
    "INSERT INTO `clientes`(`nombre`, `apellidos`, `email`) VALUES (?, ?, ?)";

  //Conectamos
  const DB = await conectarByMysql();

  //Si no es null
  if (DB !== null) {
    //Obtenemos filas
    const respuesta = await DB.query(consulta, [
      req.body.nombre,
      req.body.apellidos,
      req.body.email,
    ]);

    //Si NO existe
    if (!respuesta) {
      return null;
    }

    //retornamos un JSON con el cliente
    res.json({
      ...req.body,
    });
  }

  return null;
};
const eliminarClienteById = async (req, res) => {
  //Consulta
  const consulta = "DELETE FROM `clientes` WHERE id = ?";

  //Conectamos
  const DB = await conectarByMysql();

  //Si no es null
  if (DB !== null) {
    //Obtenemos filas
    const respuesta = await DB.query(consulta, [req.params.id]);

    //Si NO existe
    if (!respuesta) {
      return null;
    }

    //retornamos un estatus
    res.sendStatus(204);
  }

  return null;
};

//Actualizar un cliente
const actualizarClienteById = async (req, res) => {
  //Consulta
  const consulta =
    "UPDATE `clientes` SET ? WHERE id = ?";

  //Conectamos
  const DB = await conectarByMysql();

  //Si no es null
  if (DB !== null) {
    //Obtenemos filas
    const respuesta = await DB.query(consulta, [
      req.body,
      req.params.id
    ]);

    //Si NO existe
    if (!respuesta) {
      return null;
    }

    //retornamos un JSON con el cliente
    res.json({
      ...req.body,
    });
  }

  return null;
};

export {
  getListaClientes,
  getClienteById,
  contadorTablaClientes,
  crearCliente,
  eliminarClienteById,
  actualizarClienteById,
};
