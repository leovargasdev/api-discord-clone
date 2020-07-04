"use strict";

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

require("express-async-errors");

var _cors = _interopRequireDefault(require("cors"));

var _AppError = _interopRequireDefault(require("./errors/AppError"));

require("./infra/typeorm");

var _routes = _interopRequireDefault(require("./routes"));

require("./providers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.json());
app.use((0, _cors.default)());
app.use(_routes.default); // Centralizando os erros da aplicação

app.use((err, request, response, _) => {
  if (err instanceof _AppError.default) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });
});
app.listen(3333);