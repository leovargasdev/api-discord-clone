"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _tsyringe = require("tsyringe");

var _CreateMessageService = _interopRequireDefault(require("../services/CreateMessageService"));

var _ListMessagesService = _interopRequireDefault(require("../services/ListMessagesService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const routes = (0, _express.Router)();
routes.post('/new-message', async (request, response) => {
  const {
    content,
    username,
    avatar_url
  } = request.body;

  const createMessage = _tsyringe.container.resolve(_CreateMessageService.default);

  const message = await createMessage.execute({
    content,
    username,
    avatar_url
  });
  return response.json(message);
});
routes.get('/messages', async (request, response) => {
  const listMessages = _tsyringe.container.resolve(_ListMessagesService.default);

  const messages = await listMessages.execute();
  return response.json(messages);
});
var _default = routes;
exports.default = _default;