module.exports = {
  "type": "mongodb",
  "url": process.env.MONGO_URL,
  "port": 27017,
  "logging": true,
  "synchronize": true,
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
  "entities": [
    "./dist/infra/schemas/Message.js"
  ]
}