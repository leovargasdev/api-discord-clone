module.exports = {
  "type": "mongodb",
  // "url": process.env.MONGO_URL,
  "host": "localhost", // comentar em produção
  "database": "discord", // comentar em produção
  "port": 27017,
  // "logging": true,
  "synchronize": true,
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
  "entities": [
    // "./dist/infra/schemas/Message.js"
    "./src/infra/schemas/Message.ts"
  ]
}
