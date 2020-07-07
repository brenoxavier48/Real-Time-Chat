import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './styles.css'

const LoginPage = ( ) => {

    const [inputValue, setInputValue] = useState ( '' )
    const history = useHistory()

    const handleChange = ( event ) => {
        setInputValue ( event.target.value )
    }

    const handleSubmit = ( event ) => {
        event.preventDefault ( )

        if ( inputValue ) {
            localStorage.setItem ( 'userName', inputValue )
            history.push ( '/chat' )
        }
    }

    return (
        <div className="login__container">
            <h1 className="login__title">
                Chose your Nickname
            </h1>
            <form 
                action="submit" 
                className="login__form"
                onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    className="login__input" 
                    maxLength={32}
                    value={ inputValue }
                    onChange={ handleChange }
                    />
                <button className="login__button">
                    Join
                    <FaArrowRight/>
                </button>
            </form>

        </div>
    )
}

export default LoginPage