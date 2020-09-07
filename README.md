<h1 align="center">
  <img alt="DiscordClone" title="DiscordClone" src="https://github.com/LeeonardoVargas/discord-clone/blob/master/.github/logo.svg" width="300px" />
</h1>

<h4 align = "center">
  Backend do clone do aplicativo <a href="https://discord.com/">Discord</a>
</h4>

## :rocket: Tecnologias

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [MongoDB](https://www.mongodb.com/)
- [TypeORM](https://typeorm.io/#/)
- [Date-fns](https://date-fns.org/)

## 💻 Sobre o projeto

Api REST do projeto [discord-clone](https://github.com/LeeonardoVargas/discord-clone), essa api permite o envio e o armazenamento de mensagens do chat através do [MongoDB](https://www.mongodb.com/).

## 📥 Instalação e execução

```bash
# Clonando o repositório e acessando o diretório
$ git clone https://github.com/LeeonardoVargas/api-discord-clone && cd api-discord-clone

# Crie uma imagem no mongoDB para usar como banco de dados das mensagens
$ docker run --name discord-mongodb -p 27017:27017 -d -t mongo

# Execute o container
$ docker start discord-mongodb

# Instalando as depedências
$ yarn install

# Criando container Docker

# Executando o Docker

# Rodando migrations

# Executanto aplicação
$ yarn dev:server
```
