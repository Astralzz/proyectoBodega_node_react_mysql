// CONEXIÓN CON LA BASE DE DATOS
import configDatabase from "../config/configDatabase";
import mysql from "mysql2/promise";

//Creamos conexión
const conectarByMysql = async () => {
  let Res = null;

  try {
    //Conectamos
    Res = await mysql.createConnection(configDatabase);
  } catch {
    //Error
    Res = null;
  } finally {
    //Retornamos
    return Res;
  }
};

export default conectarByMysql;
