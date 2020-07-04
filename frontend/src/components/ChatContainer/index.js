import React, { useEffect } from 'react';
import './styles.css';

const ChatContainer = (props) => {

    useEffect ( () => {
        document.querySelector('#chat-container').scrollTop = document.querySelector('#chat-container').scrollHeight
    })
    
    return(
        <div id="chat-container" className="chat-container">
            {props.children}
        </div>
    )
}

export default ChatContainer