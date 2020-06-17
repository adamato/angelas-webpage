import React from 'react';
import background from '../images/geometric-marble.jpg'
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import About from './About.js';

class Home extends React.Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${background})` }} className="homepage">
                <p className="welcome">Hi, I'm Angela Damato.</p>
                <div>
                    <Nav.Link as={Link} to="/about">
                   -- ABOUT --
                    </Nav.Link>
                </div>
            </div>
        );
    }
}

export default Home;