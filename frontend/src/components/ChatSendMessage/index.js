import React, { useState } from 'react'
import './styles.css'
import { FaArrowRight } from 'react-icons/fa'

const ChatSendMessage = (props) => {

    const [ inputValue, setInputValue ] = useState('')

    const handleChange = event => setInputValue ( event.target.value )

    const handleSubmit =  event => {
        event.preventDefault()

        if ( inputValue ) {
            props.send ( inputValue ) 
            setInputValue('') 
        }
    }

    return(
        <form className="sendMessage__form" onSubmit={ handleSubmit }>
            <input 
                type="text" 
                className="sendMessage__input"
                value={ inputValue }
                onChange={ handleChange }
            />
            <button className="sendMessage__button">
                <FaArrowRight/>
            </button>
        </form>
    )
}

export default ChatSendMessage