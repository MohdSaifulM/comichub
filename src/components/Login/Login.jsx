import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { authLogin } from '../../utilz/functions';

function Login() {

    const [userInput, setUserInput] = useState([]);
    const [success, setSuccess] = useState(false);

    function changeHandler(e) {
        setUserInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    function login() {
        authLogin(userInput.email, userInput.password, setSuccess);
    }

    if (success) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <Form className="text-warning">
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button variant="outline-warning" onClick={login}>Login</Button>
                <Link to="/login" className="nav-link text-warning float-right">Forget Password</Link>
            </Form>
        </Container>
    )
}

export default Login
