import React from 'react';

import '../App.css';
import {Col, Row} from 'react-bootstrap';

function About(){
    return (
        <div>
            <Row>
                <Col xs={{ span: 4, offset: 2}}>
                    <img src='/IMG_0101.JPG' alt="Logo" style={{height: 'auto', width: '100%'}}/>
                </Col>
                <Col xs={{ span: 5}}>
                    <h3>Hey, There!</h3>
                    <p>I am a Software Engineer currently living in Wisconsin. In 2015, I graduated with a bachelor in Information from <a href={'https://www.si.umich.edu/'}>UMSI</a> and a minor in Applied Statistics (I love data!). My talents include </p>
                    <p>My 5 to 9 interests are coffee, dogs, diy/crafts, and cooking. </p>
                    <p>I'm still looking for something I can fall in love with!</p>
                    <p> currently listening to:</p>
                </Col>
            </Row>
        </div>
    );
}

export default About;

// height: auto;
// width: 50%