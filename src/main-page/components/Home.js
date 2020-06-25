import React from 'react';
import styled from 'styled-components';
import background from '../images/geometric-marble.jpg';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import About from './About.js';

const HomeWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100%;
  width: 100%;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const HomeContent = styled.div`
height: 100%;
vertical-align: middle;
text-align: center;
display: table;
`;


const CenteredText = styled.div`
position: absolute;
top: 50%;
width: 100%;
transform: translateY(-50%);
`;

class Home extends React.Component {
    render() {
        return (
            <div style={{backgroundImage:`url(${background})`, height: '100%'}}>
                <HomeContent>
                    <CenteredText>Hi, I'm Angela Damato.
                        <Nav.Link as={Link} to="/about">
                            &ndash; ABOUT &ndash;
                        </Nav.Link>
                    </CenteredText>
                </HomeContent>
            </div>
        );
    }
}

export default Home;