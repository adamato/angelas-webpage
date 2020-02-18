import React from 'react';

export default class PDFViewer extends React.Component {

    constructor(props) {
        super(props);
        this.viewerRef = React.createRef();
        this.backend = new props.backend();
    }

    componentDidMount() {
        const { src } = this.props;
        const element = this.viewerRef.current;
        console.log(`element is: ${element}`);
        this.backend.init(src, element);
    }

    render() {
        return (
            <div ref={this.viewerRef} id='viewer' style={{ width: '80%', height: '100%' }}>

            </div>
        )
    }
}