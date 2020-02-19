import React from 'react';

import '../App.css';
import {Col, Row} from "react-bootstrap";

function Work(){
    return (

        <Col xs={{ span: 6, offset: 2}}>
            <Row><h2>//Design</h2></Row>
            <Row><h2>//Web</h2></Row>
            <Row><h2>//Usability + UI</h2></Row>
            <Row><h2>//Other</h2></Row>
        </Col>
    );
}

export default Work;