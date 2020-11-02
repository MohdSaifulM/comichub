import React from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <Container>
            <Form className="text-warning">
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Button variant="outline-warning" >Login</Button>
                <Link to="/login" className="nav-link text-warning float-right">Forget Password</Link>
            </Form>
        </Container>
    )
}

export default Login
