const express = require('express');
const http = require('http');
const socketio = require('socket.io')
const router = require('./router')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.use(router)

io.on('connection', (socket) => {
    console.log('User has joinned.....')

    socket.on('disconnect', () => {
        console.log('User has left.....')
    })
})


const PORT = process.env.PORT || 8000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
