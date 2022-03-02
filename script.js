import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner, Inject } from '@syncfusion/ej2-react-pdfviewer';
function App() {

    let pdfLink = 'http://docente.ifsc.edu.br/vilson.junior/pi/04_Introducao_JavaScript.pdf';
    //pdfLink = 'fundamentos.pdf';
    return
    (<div>
        <h1>testando aqui</h1>
        <div className='control-section'>
            <PdfViewerComponent id="container" documentPath={pdfLink} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]} />
            </PdfViewerComponent>
        </div>
    </div>);
}
ReactDOM.render(<App />, document.getElementById('sample'));