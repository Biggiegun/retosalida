import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Principal}  from '../pages/Principal'
import {Carrito} from '../pages/Carrito'
import {CrudProducto} from '../components/CrudProducto'

const DashBoardRouter = () => {
    return (
        <Switch>
            <Route exact 
            path="/"
            component={Principal}
            />
            <Route exact 
            path="/carrito"
            component={Carrito}
            />
            <Route exact 
            path="/crudproducto"
            component={CrudProducto}
            />
            <Redirect to="/"/>
        </Switch>
    )
}

export default DashBoardRouter
