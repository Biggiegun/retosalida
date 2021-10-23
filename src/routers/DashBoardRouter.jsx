import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Principal}  from '../pages/Principal'
import {CrudProducto} from '../components/CrudProducto'

const DashBoardRouter = () => {
    return (
        <Switch>
            <Route exact 
            path="/"
            component={Principal}
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
