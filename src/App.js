import React, { Component } from 'react';
import * as jsPDF  from 'jspdf'

import Page from './Page';

class App extends Component {
  constructor(props) {
    super(props);
    this.downloadPDF = this.downloadPDF.bind(this)
  }

  downloadPDF (array) {
    // Nuevo PDF
    const doc = new jsPDF();
    // Fecha del dia convertida para utilizar en PDF
    const todayDate = new Date();
    const today = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
    // 22mm es la separacion de cada una de las filas
    const base = 22;

    //Por cada elemento del arreglo creo una nueva fila
    array.map((data, i) => {
      const newText = ((base * (i+1)) + 18);
      const newLine = ((base * (i+1)) + 35);

        doc.setFontSize(9);
        doc.text(18, newText, data.instance);
        doc.text(45, newText, today);
        doc.text(80, newText, data.description);
        doc.text(115, newText, data.nationality);
        doc.text(155, newText, data.photo);

        doc.line(15, newLine, 190, newLine);
    });

    doc.setFontSize(11);
    doc.setFont("std");
    doc.setFontType("bold");

    // Cebecera
    doc.text(170, 8, `Date: ${today}`);
    doc.text(10, 8, 'LOGO');
    doc.text(170, 14, 'Type: ');

    // Contenido tabla
    doc.text(20, 29, 'Instance');
    doc.text(50, 29, 'Time/Hour');
    doc.text(85, 29, 'Description');
    doc.text(120, 29, 'Nationality');
    doc.text(160, 29, 'Photo');

    // Pie de pag
    doc.text(185, 290, 'Page: 1');

    // Horizontales
    doc.setLineWidth(0.3);
    doc.line(15, 20, 190, 20);
  	doc.line(15, 35, 190, 35);
  	doc.line(15, 277, 190, 277);

    // Verticales
  	doc.line(15, 20, 15, 277);
  	doc.line(40, 20, 40, 277);
  	doc.line(75, 20, 75, 277);
  	doc.line(110, 20, 110, 277);
  	doc.line(150, 20, 150, 277);
  	doc.line(190, 20, 190, 277);

    // Descargar el PDF
    doc.save('aaaa.pdf');
  }

  render() {
    const data = [
      { instance: 'Carlos', description: 'Merez', time: '23', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Roberto', description: 'Gonzalez', time: '12', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Chicha', description: 'Succia', time: '32', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Chicha', description: 'Succia', time: '32', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Vivi', description: 'Gonzalez', time: '52', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Vivi', description: 'Gonzalez', time: '52', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Pablo', description: 'Gonzalez', time: '34', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Pablo', description: 'Succia', time: '63', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Pablo', description: 'Succia', time: '63', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Agus', description: 'Martinez', time: '72', nationality: 'Argentina', photo: 'imagen'},
      { instance: 'Agu2s', description: 'Martinez', time: '72', nationality: 'Argentina', photo: 'imagen'}
    ];

    return (
      <div>
        <button onClick={ () => this.downloadPDF(data) }> Download PDF</button>
      </div>
    );
  }
}

export default App;

// <p>
//   <a href="src/page.pdf" className="button" download>Download PDF</a>
// </p>
