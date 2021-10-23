import React from 'react'
// import {UseAuth} from '../auth/UseAuth'
import {Form, Button, Container} from 'react-bootstrap'
import {loginGoogle, loginEmailPassword, loginFacebook} from '../actions/actionLogin'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {useForm} from '../hooks/useForm'

export const Login = () => {
    // const history = useHistory();
    // const location = useLocation();
    // const previousObjectURL = location.state?.from;
    // const auth = UseAuth();
    const dispatch = useDispatch();

    
    const [values, handleInputChange, reset] = useForm({
        email:'',
        password:''
    })


    const {email, password} = values;
    
    const handleLogin = (e) =>{
        // auth.login();
        // history.push(previousObjectURL || "/")
        e.preventDefault()
        dispatch(loginEmailPassword(email,password))
    }

    const handleGoogle = () =>{
        dispatch(loginGoogle());
    }

     const handleFacebook = () =>{
        dispatch(loginFacebook());
    }

    return (
        <div>
            <h1>Página Login - Github Repositorios</h1>
            <Form onSubmit ={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value = {email}
                    onChange = {handleInputChange}
                    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = {password}
                    onChange = {handleInputChange}
                    />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Enviar
            </Button>
            <Container className="auth__social-networks">
                <p>Autenticarse con Google</p>
                <Container
                    className="google-btn"
                    onClick= {handleGoogle}
                >  
                    <Container className="google-icon-wrapper"  >
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>
                <p>Autenticarse con Facebook</p>
                <Container
                    className="facebook-btn"
                    onClick= {handleFacebook}
                >  
                    <Container className="facebook-icon-wrapper"  >
                        <img className="facebook-icon" src="https://img.icons8.com/fluency/50/000000/facebook.png" alt="facebook button" />
                    </Container>
                </Container>
            </Container>
            <Link to="/registro">Registrarse</Link>
        </Form>
        </div>
    )
}
