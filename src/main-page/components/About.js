import React from 'react';

import '../App.css';
import {Button, Col, Row} from 'react-bootstrap';

class About extends React.Component {
    render() {
        return (
            <div style={{paddingTop:'2vw'}} className="about">
                <Row>
                    <Col xs={{ span: 3, offset: 3}}>
                        <img src='/IMG_0101.JPG' alt="Logo" style={{height: 'auto', width: '100%'}}/>
                    </Col>
                    <Col xs={{ span: 4}} className="align-middle">
                        <div style={{textAlign:'center', height: '100%', verticalAlign: 'middle'}}>
                            <h5>Hello, I'm Angela!</h5><br/>
                            <p>I am a multi-passionate millennial currently living in Wisconsin.
                                In 2015, I graduated with a Bachelor of Science in Information from <a href={'https://www.si.umich.edu/'}>UMSI</a> (Go Blue!) + a minor in Applied Statistics.
                                I'm a learner with an analytical brain...I love to challenge the status quo and am always looking for new ways of doing things through understanding people and looking for patterns in data.</p>

                            <p>When I'm not behind my computer, I enjoy finding cozy cafes (if it's winter!) and a relaxing park (if it's summer), petting dogs, spending time at the lake, and thrifting. I've recently taken up photography!</p>

                            <p>I'm currently a software engineer at Liberty Mutual supporting machine learning initiatives. Download my resume <a href="Angela_Damato_Resume.pdf">here!</a></p>
                            <p><i>Interested to know more?</i> I'd love to hear what brought you to my corner of the web. I am open to opportunities and freelance design+UX.<br/> Thanks for stopping by</p>

                            <Button variant="outline-primary">Let's chat!</Button>
                        </div>
                    </Col>
                </Row>
            </div>
    );
}
}

export default About;

// height: auto;
// width: 50%