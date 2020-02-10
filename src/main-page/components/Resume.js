import React from 'react';
import {Col, Row} from 'react-bootstrap';

import '../App.css';

function Resume(){
    return (
        <div>
            <Row>
                <Col xs={{ span: 4, offset: 2 }}><h2>Education</h2></Col>
                <Col xs={{ span: 6}}>
                    <h3>Bachelor of Science, Information. Minor in Applied Statistics</h3>
                    <p>University of Michigan, Ann Arbor, MI. September 2011-May 2015</p>
                </Col>
            </Row>
        </div>

    );
}

export default Resume;