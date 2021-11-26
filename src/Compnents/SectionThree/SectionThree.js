import React from 'react';
import './SectionThree.css'
import Button from 'react-bootstrap/Button'
const SectionThree = () => {
    return (
        <div className="container pt-5">
            <div className="d-flex">
                <div className="col-md-8">
                <h2 className="sectionThreeOne">Get the Professional Qualifications you are looking for</h2>
               <div>
               <p className="sectionThreeTwo pt-3">Interport Corporate Academy is also accredited by the Chartered Institute of Logistics and Transport (CILT), International (UK) to provide the globally recognized CILT International Diploma and Certificate courses in Logistics and Transport in Bangladesh.</p>
                </div>
                </div>
                <div className="col-md-4 ">
                    <div >
                   <Button variant="outline-info" className="ButtonRightTwo" >VIEW ALL QUALIFICATIONS</Button>

                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default SectionThree;