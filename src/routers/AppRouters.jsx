import React from 'react'
import {HashRouter as Router,
        Switch,
        Route} from 'react-router-dom'
import {Navbar} from '../components/Navbar'
import {Login} from '../pages/Login'
import {Registro} from '../pages/Registro'
import {Principal} from '../pages/Principal'
import {Carrito} from '../pages/Carrito'
import {PrivateRoute} from './PrivateRoute'
import {PublicRoute} from './PublicRoute'

//import {NotFound} from '../pages/NotFound'

export const AppRouters = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <PublicRoute exact path="/login" component={Login}/>
                <PublicRoute exact path="/registro" component={Registro}/>
                <Route exact path="/" component={Principal}/>
                {/* <Route exact path="/*" component={NotFound}/> */}

                {/*Rutas Privadas !!*/}
                <PrivateRoute exact path="/carrito" component={Carrito}/>
            </Switch>
        </Router>
    )
}
