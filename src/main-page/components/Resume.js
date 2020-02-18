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
                    src='/resume.pdf'
                />
            </div>
        );
    }
}

export default Resume;