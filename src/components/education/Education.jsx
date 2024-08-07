import "./education.scss";
import { pdfData } from "../../lib/edu";
import { useState } from "react";

const Education = () => {
    const[openPDF , setOpenPDF] = useState(true);

    const handleViewCertificate = (file) => {
        setOpenPDF(file);
      };
  return (
    <div className="Education">
        <h1 className="ct">my certificates</h1>
      <div className="certificates">
        {pdfData.map((item, i) => (
          <div key={i} className="certificate-item">
            <div className="certificate-t">
              <h1>{item.name}</h1>
              <h3>{item.tittle}</h3>
              hj
              <p>
                {item.date}<span> . </span>{item.text}
              </p>
            </div>
            <button onClick={() => handleViewCertificate(item.file)}>
              View Certificate
            </button>
          </div>
        ))}
         {setOpenPDF && (
        <div className="pdf-viewer">
          <iframe
            src={setOpenPDF}
            width="100%"
            height="600px"
            title="Certificate"
          />
          <button onClick={() => setOpenPDF(true)}>Close</button>
        </div>
      )}
      </div>
     
    </div>
  );
};

export default Education;
