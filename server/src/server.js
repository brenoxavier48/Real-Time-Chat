const io = require('socket.io')(3333);

const users = {}

io.on ('connection', socket => {
    socket.on ('new-user', data => {
        users[socket.id] = data.user
        socket.broadcast.emit ('new-user', data)
    }) 

    socket.on ('chat-message', data => {
        socket.broadcast.emit ('chat-message', data)
    })
})

io.on ('disconnect', socket => {
    socket.broadcast.emit ('user-disconnected', users[socket.id])
    delete users[socket.id]
})





