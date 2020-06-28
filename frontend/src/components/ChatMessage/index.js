import React from 'react';
import './styles.css'

const ChatMessage = (props) => {

    return (
        <div className={`message__container${props.user ? '--other-user' : ''}`}>
            <div className={`message__content${props.user ? '--other-user' : ''}`}>
                {props.user ? <h5 className="message__user">{props.user}</h5> : null}
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default ChatMessage