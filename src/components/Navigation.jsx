import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import firebase from './../utilz/firebase';

function Navigation() {

    const [displayName, setDisplayName] = useState();
    const [logout, setLogout] = useState(false);

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            setDisplayName(user.providerData[0].displayName)
            setLogout(true);
        } else {
            // No user is signed in.
        }
    });

    function userLogout() {
        firebase.auth().signOut();
        setLogout(false);
    }

    const welcomeNote = displayName ? <p className="nav-link disabled">Hi {displayName}</p> : <NavLink to="/signup" className="nav-link">Sign Up/Login</NavLink> ;
    const logoutNote = logout && <a href="/" className="badge badge-warning mt-2" onClick={userLogout}>Logout</a> ;

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Comichub</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/myhub" className="nav-link">MyHub</NavLink>
                    {welcomeNote}
                    <div>
                        {logoutNote}
                    </div>
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
