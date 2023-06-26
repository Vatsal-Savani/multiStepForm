import React from "react";
import jsPDF from "jspdf";

const makePdf = (allData) => {
  //   console.log(allData);
  //   const doc = new jsPDF();

  //   let num = 10;

  //   for (const key in allData) {
  //     doc.text(`${key}: ${allData[key]}`, 10, (num += 10));

  //     const pdfDataUri = doc.output("datauristring");

  //     const link = document.createElement("a");
  //     link.href = pdfDataUri;
  //     link.download = "myPDF.pdf";

  //     link.click();
  //  };

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("User Details", 10, 10);

  let startY = 30;
  const lineSpacing = 10;

  Object.entries(allData).forEach(([key, value]) => {
    doc.setFontSize(12);
    doc.setFontStyle("bold");
    doc.text(`${key}:`, 10, startY);
    // doc.setFontStyle("normal");
    doc.text(`${value}`, 50, startY);

    startY += lineSpacing;
  });

  doc.save("myPDF.pdf");
};

export default makePdf;
