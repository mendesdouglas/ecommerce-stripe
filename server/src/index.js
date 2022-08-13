//carregando o express
const express = require('express');
const cors = require('cors');
const UserController = require('./controller/UserController');

//inicializando o express
const server = express();


server.use(cors());
server.use(express.json());


const UserRoutes = require('./routes/UserRoutes');
server.use('/register', UserRoutes);


//ficar escutando na porta 3333
port = 8000
server.listen(port, () =>{
console.log('API ONLINE PORTA: ',port );

});