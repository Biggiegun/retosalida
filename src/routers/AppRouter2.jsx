import React, { useState, useEffect } from 'react'
import {
    HashRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import { PrivateRoute2 } from './PrivateRoute2';
import { PublicRoute2 } from './PublicRoute2'
import {Loading} from '../pages/Loading'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { loginSincrono } from '../actions/actionLogin';
import { useDispatch} from 'react-redux'
import {Login} from '../pages/Login'
//import {Registro} from '../pages/Registro'
import DashBoardRouter from './DashBoardRouter';
import {RegistroFormik} from '../pages/RegistroFormik';

const AppRouter2 = () => {
    const auth = getAuth()
    const dispatch = useDispatch()
    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setisLooggedIn] = useState(false)
    
    useEffect(() => {
        onAuthStateChanged(auth, async(user)=>{
            if(user?.uid){
                setisLooggedIn(true)
                dispatch(loginSincrono(user.uid, user.displayName))
            }else{
                setisLooggedIn(false)
            }
            setChecking(false)
        })
       
    }, [])

    if(checking){
        return <Loading/>
    }

    return (
        <Router>
            
            <Switch>
                <PublicRoute2
                    path="/login"
                    component={Login}
                    isAuthenticated={isLooggedIn}
                />
                <PublicRoute2
                    path="/registro"
                    component={RegistroFormik}
                    isAuthenticated={isLooggedIn}
                />
                <PrivateRoute2
                 path="/"
                 component={DashBoardRouter}
                 isAuthenticated={isLooggedIn}
                />
            </Switch>
        </Router>
    )
}

export default AppRouter2