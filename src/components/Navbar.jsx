import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/actionLogin';
// import { UseAuth } from '../auth/UseAuth' 
import { useDispatch } from 'react-redux'

export const Navbar = () => {
    // const auth = UseAuth();
    const dispatch = useDispatch();

    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">Amazonas</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/task">
            Task
            </Link>
            </li>
             <li className="nav-item">
            <Link className="nav-link" to="/carrito">
            Carrito
            </Link>
            </li>
            <li className="nav-item">
            <button onClick={()=>dispatch(startLogout())}>
            Logout
            </button>
            </li>
            </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar Producto..." aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
            </div>
            </div>
            </nav>
        </div>
    )
}
