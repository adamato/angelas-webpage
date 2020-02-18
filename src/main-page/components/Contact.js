import React from 'react';

import '../App.css';
import {Form, Button, Col, Row} from 'react-bootstrap';

function Contact(){
    return (
        <div>
            <Row>
                <Col xs={{ span: 5, offset: 3}}>
                <h2>Lets Connect!</h2>
                    <p>I'd love to hear from you! drop a line in the form below or email me at angela.damato@outlook.com</p>
                    <Form>
                        <Form.Row>
                            <Form.Label>Name*: </Form.Label>
                            <Form.Group  as={Col} controlId="formName">
                                <Form.Control type="name" aria-label="First Name" placeholder="First Name" />
                            </Form.Group>
                            <Form.Group  as={Col} controlId="formName">
                                <Form.Control type="name" placeholder="Last Name" aria-label="Last Name"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Label>Email*</Form.Label>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formWebsite">
                            <Form.Label>Website(optional)</Form.Label>
                            <Form.Control type="email" placeholder="Enter website (optional)" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Subject*</Form.Label>
                            <Form.Control type="email" placeholder="Enter subject" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Message*</Form.Label>
                            <Form.Control type="message" placeholder="Enter Message" as="textarea" rows="5"/>
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;