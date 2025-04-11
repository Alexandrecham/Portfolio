"use client";

import { useState } from 'react';

interface PdfDownloadButtonProps {
  contentId: string;
  fileName: string;
}

export default function PdfDownloadButton({ contentId, fileName }: PdfDownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    try {
      const content = document.getElementById(contentId);
      if (!content) return;

      const { default: jsPDF } = await import('jspdf');
      
      // Initialize PDF
      const pdf = new jsPDF();
      
      // Get text content
      const text = content.innerText;
      
      // Split text into lines that fit on the page
      const lines = pdf.splitTextToSize(text, 180); // 180 is the max width in points
      
      // Add text to PDF
      let y = 20; // Start 20 points from top
      const lineHeight = 7;
      
      for (let i = 0; i < lines.length; i++) {
        if (y > 280) { // Near bottom of page (297 is A4 height)
          pdf.addPage();
          y = 20; // Reset to top of new page
        }
        pdf.text(15, y, lines[i]);
        y += lineHeight;
      }
      
      pdf.save(`${fileName}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className={`mt-8 px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors ${
        isGenerating ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
      } text-white`}
    >
      {isGenerating ? (
        'Génération en cours...'
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
          Télécharger en PDF
        </>
      )}
    </button>
  );
}
