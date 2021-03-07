const express = require('express');
const routes = require('./routes');
var cors = require('cors')
require('./database')

// App Definiton
const app = express();
const server = require('http').createServer(app);
const options={
    cors:true,
    origins:["*"],
}
const io = require('socket.io')(server, options);


// App configurations
app.use(express.json());
app.use(cors())
app.options('*', cors());

io.on('connection', socket => {
    console.log (`Conexão de socket ${socket.id} estabelecida`)
    socket.on('created_object', data => {
        socket.broadcast.emit('send_created_data', data)
    })
})

app.use(routes);


// App port configuration
server.listen(3333);