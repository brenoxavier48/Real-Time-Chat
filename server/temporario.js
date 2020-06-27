var kole= io('http://localhost:3333')

kole.on ('chat message', msg => {
    console.log(msg)
})

document.querySelector ('#send').addEventListener ('click', e => {
    let obj = { userName: 'Brenin', msg: document.querySelector ('#msg').value }
    console.log(obj)
    kole.emit( 'chat message', obj)
})