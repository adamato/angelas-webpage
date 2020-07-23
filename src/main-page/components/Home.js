import React from 'react';
import styled from 'styled-components';
import background from '../images/geometric-marble.jpg';
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const HomeWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 80%;
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
font-family: Perpetua,Baskerville,Big Caslon,Palatino Linotype,Palatino,URW Palladio L,Nimbus Roman No9 L,serif; 
font-size: 60px;
`;

const CenteredText = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    size: 60px;
`;

const NavLinks = styled.div`
`;

const BlackLink = styled(Link)`
    color:black;
    font-size: 0.5em;
`;

class Home extends React.Component {
    render() {
        return (
            <div style={{backgroundImage:`url(${background})`, height: '90%'}}>
                <HomeContent>
                    <CenteredText>Hi, I'm Angela Damato.
                        <NavLinks>
                            <BlackLink to="/about">
                                &ndash; ABOUT &ndash;
                            </BlackLink>
                            <BlackLink to="/work">
                                WORK
                            </BlackLink>
                            <BlackLink to="/contact">
                                &ndash; CONTACT &ndash;
                            </BlackLink>
                        </NavLinks>
                    </CenteredText>
                </HomeContent>
            </div>
        );
    }
}

export default Home;