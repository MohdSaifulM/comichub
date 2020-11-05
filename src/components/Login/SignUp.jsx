import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom';
import { signUp } from '../../utilz/functions';



function SignUp() {

    const [userInput, setUserInput] = useState([]);
    const [success, setSuccess] = useState(false);

    function changeHandler(e) {
        setUserInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    function signNewUser() {
        const fullname = `${userInput.firstname} ${userInput.lastname}`;
        signUp(userInput.email, userInput.password, fullname, setSuccess);
    }

    if (success) {
        return <Redirect to="/" />
    }

    return (
        <Container>
            <Form className="text-warning">
                <h3 >Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstname" onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname" onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" onChange={changeHandler} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={changeHandler} />
                </div>

                <Button variant="outline-warning" onClick={signNewUser}>Register</Button>
                <div className="float-right">
                    Already registered? <Link to="/login" className="nav-link btn btn-warning">Login</Link>
                </div>
            </Form>
        </Container>
    )
}

export default SignUp
