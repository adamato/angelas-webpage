import React from 'react';
import styled from 'styled-components';
import '../App.css';
import {Form, Button, Col} from 'react-bootstrap';
import axios from 'axios';


const rowStyled = styled.div`
   margin-right: 0px !important;
   margin-left: 0px;
`;

class Contact extends React.Component{
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data:  this.state
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent.");
                this.resetForm()
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            websie: '',
            subject: '',
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    render() {
        return (
            <div style={{paddingTop:'2vw'}}>
                <rowStyled>
                    <Col xs={{span: 5, offset: 3}}>
                        <h2 id="heading">Lets Connect!</h2>
                        <p>Wanna get in touch or talk about a project? drop a line in the form below or email me at
                            angela.damato@outlook.com</p>
                        <span className="form-required">*</span> <i>Indicates Required Field</i>
                        <Form action="" onSubmit={this.handleSubmit}>
                            <Form.Row>
                                <Form.Label>Name*: </Form.Label>
                                <Form.Group as={Col} controlId="formName">
                                    <Form.Control type="name" aria-label="First Name" placeholder="First Name"
                                                  value={this.state.name} onChange={this.onNameChange.bind(this)}/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formName">
                                    <Form.Control type="name" placeholder="Last Name" aria-label="Last Name"/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Label>Email<span class="form-required">*</span></Form.Label>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="formWebsite">
                                <Form.Label>Website</Form.Label>
                                <Form.Control type="email" placeholder="Enter website (optional)"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Subject<span className="form-required">*</span></Form.Label>
                                <Form.Control type="email" placeholder="Enter subject"/>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Message<span className="form-required">*</span></Form.Label>
                                <Form.Control type="message" placeholder="Enter Message" as="textarea" rows="5"/>
                            </Form.Group>
                            <Button variant="dark" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </rowStyled>
            </div>
        );
    }
}

export default Contact;