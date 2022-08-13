const express = require('express')
const server = express();
const cors = require('cors');
require('dotenv').config()

server.use(express.json())
//client url : http://localhost:3000
//console.log('estou no routes')
const UserRoutes = require('./routes/UserRoutes');
//const { use } = require('./routes/UserRoutes');


server.use(UserRoutes)
//console.log(process.env.CLIENT_URL)

server.use(function(req, res, next) {
    server.use(cors({

            origin: [process.env.CLIENT_URL]
        }));
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// server.use((req, res, next) => {
//         //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
//         res.header("Access-Control-Allow-Origin", "*");
//         server.use(cors({

//             origin: [process.env.CLIENT_URL]
//         }));
//         console.log('testse')
//         next();
// });

PORT = 8000
server.listen(PORT, () => {
    console.log('CONNECTED ON', PORT)
})