import React, { useState } from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import firebase from '../../utilz/firebase';
import Search from './Search';


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


    const welcomeNote = displayName ? <p className="nav-link disabled">Hi {displayName}</p> : <NavLink to="/signup" className="nav-link">Sign Up/Login</NavLink>;
    const logoutNote = logout && <a href="/" className="badge badge-warning mt-2" onClick={userLogout}>Logout</a>;
    
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <Image src="https://i.ibb.co/PWwkK6y/logo.png" height="30px"/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/myhub" className="nav-link">MyHub</NavLink>
                    {welcomeNote}
                    <div>
                        {logoutNote}
                    </div>
                </Nav>
                <Search />
            </Navbar>
        </>
    )
}

export default Navigation
