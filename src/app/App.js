//Importamos
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import opcionesSwagger from "../config/swgOptions";

//Opciones
const specs = swaggerJSDoc(opcionesSwagger);

//Usamos express
const App = Express();

//Usamos cors (para que cualquier app del backend se pueda conectar)
App.use(cors());

//Usamos morgan (ver por consola las peticiones que llegan)
App.use(morgan("dev"));

//Usamos json de express
App.use(Express.json());

//Cuando se use /docs se usan las opciones de swagger
App.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

//Exportamos
export default App;
