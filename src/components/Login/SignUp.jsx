import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function SignUp() {
    
    return (
        <Container>
            <Form className="text-warning">
                <h3 >Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstname"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastname"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"/>
                </div>

                <Button variant="outline-warning" >Register</Button>
                <div className="float-right">
                    Already registered? <Link to="/login" className="nav-link btn btn-warning">Login</Link>
                </div>
                
            </Form>
        </Container>
    )
}

export default SignUp
