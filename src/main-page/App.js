import React from 'react';
import styled from 'styled-components'
import './App.css';
import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Work from './components/Work.js';
import Resume from './components/Resume.js';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import {Navbar, Nav, Button} from 'react-bootstrap';
import Footer from './navigation/Footer.js';

const AppWrapper = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  height:100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;
const ContentWrapper = styled.div`
 flex: 1;
`;

function App() {
    return (
        <Router>
            <AppWrapper>
                <ContentWrapper>
                <Navbar bg="light" variant="light" collapseOnSelect expand="lg" sticky="top">
                    <Navbar.Brand as={Link} to={"/"}>
                        <Link to="/">
                            <img src='/logo.png' alt="Logo" style={{height: '3em', width: 'auto'}}/>
                        </Link>
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
                </ContentWrapper>
                <Footer />
            </AppWrapper>
        </Router>
    );
}



export default App;