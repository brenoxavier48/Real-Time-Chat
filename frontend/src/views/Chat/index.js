import React, { useState, useEffect } from 'react';
import './styles.css';
import socketIOClient from 'socket.io-client'
import ChatContainer from '../../components/ChatContainer'
import ChatMessage from '../../components/ChatMessage'
import ChatMessageSend from '../../components/ChatSendMessage'

const Chat = (props) => {

    const [ messages, setMessages ] = useState ( [] )
    const [ socket, setSocket ] = useState ( {} )

    useEffect ( () => {
        setSocket ( socketIOClient ('http://localhost:3333') )
    }, [])

    useEffect ( () => {

        if ( socket.io ) {
            console.log ( socket )
            socket.emit ( 'new-user', { user: 'Breno' } )

            socket.on( 'new-user', ( ) => {
                console.log('new user')
            } )

            socket.on( 'chat-message', info => {
                setMessages ( [ ...messages, info] )
            })
        }
    })


    

    const handleSend = ( value ) => {
        let content = {}
        content.user = null
        content.message = value

        setMessages ( [ ...messages, content] )
        socket.emit ( 'chat-message', { user: 'Breno', message: value} )
    }

    return(
        <div className="chat-page">
            <ChatContainer>
                {
                    messages.map ( (content, index ) => {
                        return (
                            <ChatMessage
                                key={ index }
                                user={ content.user }
                                message={ content.message }
                            />
                        )
                    })
                }
                
            </ChatContainer>
            <ChatMessageSend
                send={handleSend}
            />
        </div>
    )
}

export default Chat