//Importamos dotenv (obtener y leer las variables globales del archivo .env)
import { config as dotenv } from "dotenv";

//Iniciamos
dotenv();

//Datos para acceder a la bd
const configDatabase = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PUERTO || "3306",
  user: process.env.DB_USUARIO || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NOMBRE || "prueba",
};

export default configDatabase;
