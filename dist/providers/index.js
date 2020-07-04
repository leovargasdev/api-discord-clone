"use strict";

var _tsyringe = require("tsyringe");

var _MessagesRepository = _interopRequireDefault(require("../repositories/MessagesRepository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_tsyringe.container.registerSingleton('MessagesRepository', _MessagesRepository.default);