const express = require('express')
const server = express();
const cors = require('cors');

server.use(express.json())
//client url : http://localhost:3000
console.log('estou no routes')
const UserRoutes = require('./routes/UserRoutes')
server.use('/', UserRoutes)
server.use((req, res, next) => {
//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
res.header("Access-Control-Allow-Origin", "*");
//Quais são os métodos que a conexão pode realizar na API
res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
server.use(cors());
//next();
});

PORT = 4242
server.listen(PORT, () => {
    console.log('ON', PORT)
})