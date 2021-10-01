import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {registroEmailPasswordNombre} from '../actions/actionRegister'
import {useDispatch} from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export const RegistroFormik = () => {

   //////////////////////////////
   const formik = useFormik({
    initialValues: {
        nombre:"",
        email:"",
        pass1:"",
        pass2:""
    },
    validationSchema:   Yup.object({
        nombre:Yup.string().required(),
        email:Yup.string().email().required(),
        pass1:Yup.string().required().oneOf([Yup.ref("pass2")]),
        pass2:Yup.string().required()
    }) ,
    onSubmit:(data) => {
        const {nombre, email, pass1} = data;
        dispatch(registroEmailPasswordNombre(email, pass1, nombre))
    }
})
   //////////////////////////////

    const dispatch = useDispatch();

    return (
        <div>
            <h1>Página Registro - AMAZONAS</h1>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu nombre"
                        name="nombre"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="email"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass1"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        onChange={formik.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrarse
                </Button>
                <Link to="/login">Login</Link>
            </Form>
        </div>
    )
}
 