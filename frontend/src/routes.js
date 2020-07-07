import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import LoginPage from './views/Login'
import Chat from './views/Chat'

const Routes = ( ) => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={ LoginPage }/>
            <Route path='/chat' component={ Chat }/>
        </BrowserRouter>
    )
}

export default Routes