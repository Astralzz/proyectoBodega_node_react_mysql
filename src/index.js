import App from "./app/App.js";
import routersClientes from "./routes/routersClientes";
import "./databases/databases";

//Puerto
App.listen(3000);

App.use(routersClientes);

console.log("Server on port 3000");
