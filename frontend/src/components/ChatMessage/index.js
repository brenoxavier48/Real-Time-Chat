import React from 'react';
import './styles.css'

const ChatMessage = ( props ) => {

    return (
        
        props.newUser

        ?   <div className="newUser__container">
                <div className="newUser__content">
                    <p> { props.user } has joined</p>
                </div>
            </div>

        :   <div className={`message__container${props.user ? '--other-user' : ''}`}>
                <div className={`message__content${props.user ? '--other-user' : ''}`}>
                    {   
                        props.user 
                        ? <h5 className="message__user">{props.user}</h5> 
                        : null
                    }
                    <p>{props.message}</p>
                </div>
            </div>
    )
}

export default ChatMessage