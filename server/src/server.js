const io = require('socket.io')(3333);

const users = {}

io.on ('connection', socket => {

    socket.on ('new-user', info => {
        users[socket.id] = info.name
        sokect.broadcast.emit ('new-user', info)
    })

    socket.on ('chat-message', info => {
        socket.broadcast.emit ('chat-message', info)
    })
})

io.on ('disconnection', socket => {
    socket.broadcast.emit ('user-disconnect', users[socket.id])
    delete users[socket.id]
})





