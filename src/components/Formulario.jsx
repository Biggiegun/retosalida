import React from 'react'
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup'
const Formulario = () => {
    const formik = useFormik({
        initialValues: {
            nombre:"",
            apellidos:"",
            email:"",
            password:"",
            repeatPassword:""
        },
        validationSchema:   Yup.object({
            nombre:Yup.string().required(),
            apellido:Yup.string().required(),
            email:Yup.string().email().required(),
            password:Yup.string().required().oneOf([Yup.ref("repeatPassword")]),
            repeatPassword:Yup.string().required()
        }) ,
        onSubmit:(data) => {
            if (data) {
                console.log(data);
            } else {
                console.log("Las contraseñas no coinciden")
            }
        }
    })
    return (
        <div>
               <h1>Formulario de Registro</h1>
            <Form onSubmit = {formik.handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        onChange = {formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicApellido">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
                        onChange = {formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        onChange = {formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        onChange = {formik.handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicRepeatPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        name="repeatPassword"
                        onChange = {formik.handleChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>
    )
}
export default Formulario