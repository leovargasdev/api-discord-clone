"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Message = _interopRequireDefault(require("../infra/schemas/Message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MessagesRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getMongoRepository)(_Message.default);
  }

  async create({
    content,
    username,
    avatar_url,
    date
  }) {
    const message = await this.ormRepository.create({
      content,
      username,
      avatar_url,
      date
    });
    await this.ormRepository.save(message);
    return message;
  }

  async find() {
    return this.ormRepository.find();
  }

}

var _default = MessagesRepository;
exports.default = _default;