"use strict";

var _App = _interopRequireDefault(require("./app/App.js"));
var _routersClientes = _interopRequireDefault(require("./routes/routersClientes"));
require("./databases/databases");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Puerto
_App["default"].listen(3000);
_App["default"].use(_routersClientes["default"]);
console.log("Server on port 3000");