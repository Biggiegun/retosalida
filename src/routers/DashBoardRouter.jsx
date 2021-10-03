import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Principal}  from '../pages/Principal'
import {Ubicacion} from '../pages/Ubicacion'
import {CrudProducto} from '../components/CrudProducto'

const DashBoardRouter = () => {
    return (
        <Switch>
            <Route exact 
            path="/"
            component={Principal}
            />
            <Route exact 
            path="/ubicacion"
            component={Ubicacion}
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
