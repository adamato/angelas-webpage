import React from 'react';
import './App.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume.js';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Navbar, Nav, Button} from 'react-bootstrap';

function App() {
    return (
        <Router>
            <div>
                <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
                    <Navbar.Brand as={Link} to={"/"}>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto justify-content-end" style={{float: 'right'}}>
                            <Nav.Link as={Link} to="/about">
                                ABOUT
                            </Nav.Link>
                            <Nav.Link as={Link} to="/resume">
                                RESUME
                            </Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">
                                WORK
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact" variant="outline-primary">
                                <Button variant="outline-primary">CONTACT</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}



export default App;