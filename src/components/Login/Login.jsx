import React, { useEffect, useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { authLogin } from '../../utilz/functions';
import firebase from '../../utilz/firebase'

function Login({ history }) {

    const [userInput, setUserInput] = useState([]);
    const [success, setSuccess] = useState(false);

    function changeHandler(e) {
        setUserInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    function login() {
        authLogin(userInput.email, userInput.password, setSuccess);
    }

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            setSuccess(true);
        } else {
            // No user is signed in.
            setSuccess(false);
        }
    });

    //cleanup
    useEffect(() => {
        const ac = new AbortController;
        return () => {
            ac.abort()
        }
    }, [])

    if (success) {
        if (history) {
            return <Redirect to={`${history.location.pathname}`} />
        } else {
            return <Redirect to="/" />
        }
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
                <Link to="/signup" className="nav-link text-warning float-right">New user?<br></br>Register</Link>
            </Form>
        </Container>
    )
}

export default Login
