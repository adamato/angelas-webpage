import React from 'react';

import '../App.css';
import {Col, Row} from "react-bootstrap";

import './Tiles/tiles.js'

function renderTile(i) {
    return (
        <tiles
            value={this.state.tiles[i]}
        />
    );
}

function Work(){
    return (
        <tiles />
    );
}

export default Work;