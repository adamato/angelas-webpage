import React from 'react';

import '../App.css';
import {Button, Col, Row} from 'react-bootstrap';

function About(){
    return (
        <div>
            <Row>
                <Col xs={{ span: 4, offset: 2}}>
                    <img src='/IMG_0101.JPG' alt="Logo" style={{height: 'auto', width: '100%'}}/>
                </Col>
                <Col xs={{ span: 5}}>
                    <h5>Hello, I'm Angela!</h5>
                    <p>I am a multi-passionate millennial currently living in Wisconsin.
                        In 2015, I graduated with a Bachelor of Science in Information from <a href={'https://www.si.umich.edu/'}>UMSI</a> (Go Blue!) + a minor in Applied Statistics.
                        I'm a learner with an analytical brain...I love to challenge the status quo and am always looking for new ways of doing things through understanding people and looking for patterns in data.</p>

                    <p>When I'm not behind my computer, I enjoy finding cozy cafes (if it's winter!) and a relaxing park (if it's summer), petting dogs, spending time at the lake, and thrifting. I've recently taken up photography!</p>

                    <p>I'm currently a software engineer at Liberty Mutual supporting machine learning initiatives. Download my resume <a href="resume.pdf">here!</a></p>

                    <p><i>Interested to know more?</i> I'd love to hear what brought you to my corner of the web. I am open to opportunities and freelance design+UX</p>

                    <Button variant="outline-primary">Let's chat!</Button>
                    <i className="fab fa-linkedin"></i>
                    <p> currently listening to:</p>
                    <p>Goal Digger Podcast</p>
                    <p> currently reading:</p>
                    <p>The Rosie Project</p>
                </Col>
            </Row>
        </div>
    );
}

export default About;

// height: auto;
// width: 50%