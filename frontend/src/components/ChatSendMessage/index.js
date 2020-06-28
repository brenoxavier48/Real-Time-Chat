import React, { useState } from 'react'
import './styles.css'
import { FaArrowRight } from 'react-icons/fa'

const ChatSendMessage = (props) => {

    const [ inputValue, setInputValue ] = useState('')

    const handleChange = ( event ) => {
        setInputValue ( event.target.value )
    }

    return(
        <div className="sendMessage__container">
            <input 
                type="text" 
                className="sendMessage__input"
                value={ inputValue }
                onChange={handleChange}
            />
            <button 
                className="sendMessage__button"
                onClick={ () => { props.send ( inputValue ); setInputValue('') }}
            >
                <FaArrowRight/>
            </button>
        </div>
    )
}

export default ChatSendMessage