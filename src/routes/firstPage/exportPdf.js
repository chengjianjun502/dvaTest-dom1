import React from 'react';
import { jsPDF } from "jspdf";
import { Button } from 'antd';
 
// Default export is a4 paper, portrait, using millimeters for units


export default function exportPdf() {
    const handleClick = () =>{
        const doc = new jsPDF();
        doc.text("Hello world!", 10, 10);
        doc.save("a4.pdf");
    }
    return (
        <div>
            <Button onClick={handleClick}>点击</Button>
        </div>
    )
}
