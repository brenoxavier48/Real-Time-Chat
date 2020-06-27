const io = require('socket.io')(3333);

io.on('connection', socket => {
    console.log(socket)
    socket.on('chat message', obj => {
        console.log(obj)
        socket.emit('chat message', `${obj.userName}: ${obj.msg}`)
    })
})

io.on('disconnection', socket => {
    console.log(socket)
    socket.on('chat message', obj => {
        console.log(obj)
        socket.emit('chat message', `${obj.userName}: ${obj.msg}`)
    })
})





