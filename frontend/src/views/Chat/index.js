import React, { useState, useEffect } from 'react';
import './styles.css';
import ChatContainer from '../../components/ChatContainer'
import ChatMessage from '../../components/ChatMessage'
import ChatMessageSend from '../../components/ChatSendMessage'

import socket from '../../connectServer/socket.js'

const Chat = (props) => {

    const [ messages, setMessages ] = useState ( [] )

    useEffect ( ( ) => {
        socket.on ( 'new-user', data =>  console.log('new user', data.user) )
        socket.emit ( 'new-user', { user: 'Duda' } )
    }, [])

    useEffect ( ( ) => {
        socket.on ( 'chat-message', data => setMessages ( [ ...messages, data] ) )
    }, [messages])

    const handleSend = ( value ) => {
        let data = {
            otherUser: true,
            user: null,
            message: value,
        }
        setMessages ( [ ...messages, data] )
        socket.emit ( 'chat-message', { user: 'Duda', message: value} )
    }

    return(
        <div className="chat-page">
            <ChatContainer>
                {
                    messages.map ( (data, index ) => {
                        return (
                            <ChatMessage
                                key={ index }
                                user={ data.user }
                                message={ data.message }
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