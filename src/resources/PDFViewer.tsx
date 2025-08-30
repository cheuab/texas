import React from "react";
import { useLocation } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const PDFViewer: React.FC = () => {
  const query = useQuery();
  const file = query.get("file");
  const [numPages, setNumPages] = React.useState<number | null>(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4 text-[#BF5700] text-center">PDF Viewer</h1>
      {!file ? (
        <div className="text-gray-700">No PDF file specified.</div>
      ) : (
        <>
          <div className="mb-4 w-full flex justify-center">
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="text-gray-500">Loading PDF...</div>}
              error={<div className="text-red-500">Failed to load PDF.</div>}
            >
              <Page pageNumber={pageNumber} width={700} />
            </Document>
          </div>
          {numPages && numPages > 1 && (
            <div className="flex items-center gap-4 mb-4">
              <button
                className="px-3 py-1 bg-[#BF5700] text-white rounded hover:bg-[#a64a00] transition-colors text-xs font-medium"
                onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
                disabled={pageNumber <= 1}
              >
                Previous
              </button>
              <span className="text-gray-700">
                Page {pageNumber} of {numPages}
              </span>
              <button
                className="px-3 py-1 bg-[#BF5700] text-white rounded hover:bg-[#a64a00] transition-colors text-xs font-medium"
                onClick={() => setPageNumber((p) => Math.min(numPages!, p + 1))}
                disabled={pageNumber >= numPages}
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PDFViewer;
