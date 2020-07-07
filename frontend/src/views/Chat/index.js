import React, { useState, useEffect } from 'react';
import './styles.css';
import ChatContainer from '../../components/ChatContainer'
import ChatMessage from '../../components/ChatMessage'
import ChatMessageSend from '../../components/ChatSendMessage'

import socket from '../../connectServer/socket.js'

const Chat = (props) => {

    const [ messages, setMessages ] = useState ( [] )
    const [ userName, setUserName ] = useState ( '' )
    

    useEffect ( ( ) => {
        setUserName( localStorage.getItem ( 'userName' ) )
    }, [])

    useEffect ( ( ) => {
        if ( userName ) socket.emit ( 'new-user', { user: userName, newUser: true } )
    }, [userName])

    useEffect ( ( ) => {
        socket.on ( 'chat-message', data => setMessages ( [ ...messages, data] ) )
        socket.on ( 'new-user', data =>  setMessages ( [ ...messages, data] ) )
    }, [messages])

    const handleSend = ( value ) => {
        let data = {
            user: null,
            newUser: false,
            message: value,
        }
        
        setMessages ( [ ...messages, data] )
        socket.emit ( 'chat-message', { user: userName, message: value} )
    }

    return(
        <div className="chat-page">
            <ChatContainer>
                {
                    messages.map ( ( data, index ) => {
                        return (
                            <ChatMessage
                                key={ index }
                                user={ data.user }
                                message={ data.message }
                                newUser={ data.newUser }
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