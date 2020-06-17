import React from 'react';

import '../App.css';
import PDFViewer from './PDFViewer/pdfviewer';
import PDFJSBackend from '../../backend/pdfjs';


class Resume extends React.Component {
    render() {
        return (
            <div>
                <PDFViewer
                    backend={PDFJSBackend}
                    src='/Angela_Damato_Resume.pdf'
                />
            </div>
        );
    }
}

export default Resume;