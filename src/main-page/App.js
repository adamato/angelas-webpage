import React from 'react';
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Work from './components/Work.js';
import Resume from './components/Resume.js';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Navbar, Nav, Button} from 'react-bootstrap';
import Footer from './navigation/Footer.js';

function App() {
    return (
        <Router>
            <div>
                <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
                    <Navbar.Brand as={Link} to={"/"}>
                        <Link to="/">Angela Damato</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto justify-content-end" style={{float: 'right'}}>
                            <Nav.Link as={Link} to="/about">
                                ABOUT
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
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                            <About />
                    </Route>
                    <Route path="/resume">
                        <Resume />
                    </Route>
                    <Route path="/portfolio">
                        <Work />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}



export default App;