import React from 'react';
import './SectionTwo.css'
import Button from 'react-bootstrap/Button'

const SectionTwo = () => {
    return (
        <div className="container bg">
            <div className="pt-5 contentSizing3">
            <p className="contentSizing2 ">Professional Qualification course</p>
             <h2 className="contentSizing">CILT International Certificate in Logistics and Transport</h2>
             <p>Registration Deadline: <span className="DateColor">10 October, 2021</span></p>
             <p>Course Fee: <span className="DateColor">Tk. 20,000</span></p>
              <div className="d-flex">
                  <Button>ENROLL NOW</Button>
                  <p className="pl-3"><span className="LearnColor">LEARN MORE</span></p>
              </div>
            </div>
        </div>
    );
};

export default SectionTwo;