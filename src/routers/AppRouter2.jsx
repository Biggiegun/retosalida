import React, { useState, useEffect } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link, 
    Redirect
} from "react-router-dom";
//import Navbar from '../components/Navbar';
import {AuthRouter2} from './AuthRouter2';
import { PrivateRoute2 } from './PrivateRoute2';
import { PublicRoute2 } from './PublicRoute2'
import {Loading} from '../pages/Loading'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { loginSincrono } from '../actions/actionLogin';
import { useDispatch} from 'react-redux'
import Task from '../components/Task'
import {Principal} from '../pages/Principal'

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
                    path="/auth"
                    component={AuthRouter2}
                    isAuthenticated={isLooggedIn}
                />
                <PrivateRoute2
                 path="/task"
                 component={Task}
                 isAuthenticated={isLooggedIn}
                />
                <PrivateRoute2
                    path="/"
                    component={Principal}
                    isAuthenticated={isLooggedIn}
                />
                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}

export default AppRouter2