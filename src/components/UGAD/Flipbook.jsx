import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../PageFooter/Footer";
import HTMLFlipBook from 'react-pageflip';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "./flipbook.css";
import pdf from './flipbook.pdf';
import pdf2 from './flipbook2.pdf';
import pdf3 from './flipbook3.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef((props, ref) => {
    return (
        <div className="demoPage" ref={ref} >
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    );
});

Pages.displayName = 'Pages';

function Flipbook() {

    const [numPages, setNumPages] = useState();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
        <>
            <Navbar />

            <div className="flipbook-container">
                <h1 className="flipbook-title">UG Achievers Directory 2022-23</h1>
                <HTMLFlipBook width={400} height={570}>
                    {
                        [...Array(numPages).keys()].map((pNum) => (
                            <Pages key={pNum} number={pNum + 1}>
                                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pNum} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
                                </Document>
                                <p>
                                    Page {pNum} of {numPages}
                                </p>
                            </Pages>
                        ))
                    }
                </HTMLFlipBook>
            </div>

            <div className="flipbook-container">
            <h1 className="flipbook-title">UG Achievers Directory 2019-20</h1>
                <HTMLFlipBook width={400} height={570}>
                    {
                        [...Array(numPages).keys()].map((pNum) => (
                            <Pages key={pNum} number={pNum + 1}>
                                <Document file={pdf2} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pNum} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
                                </Document>
                                <p>
                                    Page {pNum} of {numPages}
                                </p>
                            </Pages>
                        ))
                    }
                </HTMLFlipBook>
            </div>

            <div className="flipbook-container">
            <h1 className="flipbook-title">UG Achievers Directory 2018-19</h1>
                <HTMLFlipBook width={400} height={570}>
                    {
                        [...Array(numPages).keys()].map((pNum) => (
                            <Pages key={pNum} number={pNum + 1}>
                                <Document file={pdf3} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pNum} width={400} renderAnnotationLayer={false} renderTextLayer={false} />
                                </Document>
                                <p>
                                    Page {pNum} of {numPages}
                                </p>
                            </Pages>
                        ))
                    }
                </HTMLFlipBook>
            </div>
            <Footer />
        </>

    );
}

export default Flipbook;