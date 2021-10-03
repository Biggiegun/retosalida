import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const PrivateRoute2 = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {

    return (
        <>
        <Navbar/>
        <Route { ...rest }
            component={ (props) => (
                ( isAuthenticated )
                    ? ( <Component { ...props } /> ) // Conjunto de componentes que están como privados!!!
                    : ( <Redirect to="/login" /> )
            )}
        />
        <Footer/>
        </>
    )
}
PrivateRoute2.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}