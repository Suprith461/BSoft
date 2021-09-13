import jsPDF from 'jspdf';
import 'jspdf-autotable';
import React from 'react';
import moment from 'moment';


const PdfBill = (body,footer,partieName,lorryNo) => {
    const dateToday = moment(Date()).format('DD-MM-YYYY')
    //console.log("Hello")
    //console.log("Body",body)
                //console.log("footer",footer)
                //console.log("PartieName",partieName)
                //console.log("lorryNo",lorryNo)
    const doc= new jsPDF({unit:'px'})
    doc.addFont("Roboto","Roboto","normal","500")
    
    //Mobile Number
    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("Mobile No: 9448477352,9845889375",20,15);
    
    //
    doc.setFont("Roboto","bold","1000");
    doc.setFontSize(18);
    doc.text("JAI MATA TRADERS",20,35);

    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("General merchants and commission agents",20,45);

    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("APMC yard ,Gadag-582101",20,55);

    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("Raddi sahakara bank niyamitha ,Dharwad\nBranch  :   Gadag\nIFSC NO:   IBKL0069RSB\nA/C        :   502600000127",250,35);

    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("TO,",20,85);

    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("PARTIE NAME :",24,95);

    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("PLACE :",24,105);

    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("FROM GADAG",24,125);

    //Date
    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("DATE :"+dateToday,119,125);

    //Lorry Number
    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("LORRY NO: "+lorryNo,261,125);

    //Partie name
    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text(partieName,119,95);

    //Partie Place
    doc.setFont('Roboto',"normal","200");
    doc.setFontSize(12);
    doc.text("Karnataka Gadag 582101",119,105);





    doc.moveTo(20,125);

    doc.autoTable({theme:'grid',headStyles:{fillColor: [222, 216, 215],textColor:20},
        head: [['Bags', 'Quintal', 'Kg',"Rate","Amount","","Amount Total"]],
        body: body,startY:135,showFoot:'lastPage',footStyles:{fillColor: [232, 232, 232],textColor:20},
        foot:[footer]
          
})
    
    
    
    doc.save(partieName+" "+lorryNo+" "+dateToday+" "+".pdf")








    


}

export default PdfBill
