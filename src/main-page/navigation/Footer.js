import React from 'react';
import '../App.css';

import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import {faLinkedinIn, faTwitter} from '@fortawesome/free-brands-svg-icons';

const IconWrapper = styled.div`
    float: right;
    line-height:1em;
    display: table;
`;

function Footer() {
    return (
        <div className="footer">
            <p></p>
            <p>&copy; 2020 Angela Damato</p>
            <IconWrapper>
                <a href="mailto:angela.damato@outlook.com"><FontAwesomeIcon icon={faEnvelope} style={{margin: '12px', display: 'inline-block', color:'white'}}/></a>
                <a href="https://www.linkedin.com/in/angeladamato/"><FontAwesomeIcon icon={faLinkedinIn} style={{margin: '12px', display: 'inline-block', color:'white'}} /></a>
                <FontAwesomeIcon icon={faTwitter} style={{margin: '10px', display: 'inline-block'}}/>
            </IconWrapper>
        </div>
    );
}

export default Footer;