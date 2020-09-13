module.exports = {
  "type": "mongodb",
  "host": "localhost",
  "database": "discord",
  "port": 27017,
  "synchronize": true,
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
  "entities": [
    "./src/infra/schemas/Message.ts"
  ]
}
