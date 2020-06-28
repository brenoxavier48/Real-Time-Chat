const io = require('socket.io')(3333);

const users = {}

io.on ('connection', socket => {
    console.log('connect')
    socket.on ('new-user', info => {
        users[socket.id] = info.user
        socket.broadcast.emit ('new-user', info)
    }) 

    socket.on ('chat-message', info => {
        socket.broadcast.emit ('chat-message', info)
    })
})

io.on ('disconnect', socket => {
    socket.broadcast.emit ('user-disconnected', users[socket.id])
    delete users[socket.id]
})





