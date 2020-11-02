import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Comichub</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/myhub" className="nav-link">MyHub</NavLink>
                    <NavLink to="/signup" className="nav-link">Sign Up/Login</NavLink>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-warning">Search</Button>
                </Form>
            </Navbar>
        </>
    )
}

export default Navigation
