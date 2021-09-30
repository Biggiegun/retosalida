import React from 'react'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/actionLogin';
// import { UseAuth } from '../auth/UseAuth' 
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {
    // const auth = UseAuth();
    const dispatch = useDispatch();
    const {name} = useSelector(state => state.login)

    return (
        <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container-fluid">
            <div className="d-flex flex-wrap">
            <Link className="navbar-brand" to="/"><img src="https://res.cloudinary.com/biggiegun/image/upload/v1633024545/sprint3/logo-amazon_piimmd.png" alt="Logo Amazonas"/></Link>
            <p className= "text-light me-5 align-self-end"><b>Bienvenido, {name}</b></p>
            </div>
            <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active text-light" aria-current="page" to="/">Principal</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link text-light" to="/crudproducto">
            Productos
            </Link>
            </li>
             <li className="nav-item">
            <Link className="nav-link text-light" to="/carrito">
            Carrito
            </Link>
            </li>
            </ul>
                <form className="d-flex me-2 my-2">
                    <input className="form-control me-2" type="search" placeholder="Buscar Producto..." aria-label="Search"/>
                    <button className="btn btn-outline-warning" type="submit">Buscar</button>
                </form>
            <button className="btn-warning" onClick={()=>dispatch(startLogout())}>
            Logout
            </button>
            </div>
            </div>
            </nav>
        </div>
    )
}
