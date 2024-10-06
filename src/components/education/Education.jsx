import "./education.scss";
import { pdfData } from "../../lib/edu";


const Education = () => {

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
              <p>
                {item.date}<span> . </span>{item.text}
              </p>
            </div>
            <button>
              <a href={item.file}>
              View Certificate
              </a>
            </button>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Education;
