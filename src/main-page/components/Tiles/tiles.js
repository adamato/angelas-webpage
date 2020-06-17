import React from 'react';



class tiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            image: null
        };
    }

    render() {
        return (
            <div className="square" style={{background:'blue'}}>
                <p>testing</p>
            </div>
        );
    }
}