import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {Login} from '../pages/Login'
import {Registro} from '../pages/Registro'

export const AuthRouter2 = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/registro"
                        component={ Registro }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}