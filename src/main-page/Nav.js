import React from 'react';
import './App.css'
import {Link} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';

function Nav() {
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <h3>logo</h3>
                <ul>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/Contact'>
                        <li>Contact</li>
                    </Link>
                </ul>
            </Navbar>
        </>
    );
}

export default Nav;