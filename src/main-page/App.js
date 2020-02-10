import React from 'react';
import './App.css';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Portfolio from './components/Portfolio.js';
import Resume from './components/Resume.js';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';

function App() {
    return (
        <Router>
            <div>
                <Navbar style={{BackgroundColor: '#02f030!important'}} bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top">
                    <Navbar.Brand as={Link} to={"/"}>
                        angela.d
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto" style={{float: 'left'}}>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/resume">
                                Resume
                            </Nav.Link>
                            <Nav.Link as={Link} to="/portfolio">
                                Portfolio
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contact">
                                Contact
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