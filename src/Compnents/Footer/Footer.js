import React from 'react';
import './Footer.css'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'


import img1 from '../Img/Vector (4).png'
import img2 from '../Img/Vector (5).png'
import img3 from '../Img/Vector (6).png'
import img4 from '../Img/Vector (7).png'
import img5 from '../Img/Vector (8).png'
import img6 from '../Img/Vector (9).png'
const Footer = () => {
    return (
        <div className="backgroundColorFooter">
          <div className="container p-5 d-flex">
          <div className="col-6 d-flex Allcontent">
                <div>
                    <h2>BSAA</h2>
                    <div className="d-flex">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                    <p>About Us</p>
                    <p>Our Members</p>
                    <p>Berthing Report</p>
                    <p>Careers</p>
                    <p>Links</p>
                    <p>Contact Us</p>
                </div>
                <div className="stylecontentTwo">
                    <div>
                    <h2 >Chattogram</h2>
                    <div className="d-flex">
                        <img src={img4} alt="" />
                        <p>Chamber House (2nd floor),
                          38 Agrabad C/A, Chattogram-4100, Bangladesh
                          </p>
                    </div>
                    <div className="d-flex">
                        <img src={img5} alt="" />
                        <p>031-723393</p>
                        
                    </div>
                    <div className="d-flex">
                        <img src={img6} alt="" />
                        <p>bsaa@bbts.net</p>
                    </div>
                </div>

                <div>
                    <h2>Khulna</h2>
                    <div className="d-flex">
                        <img src={img4}alt="" />
                        <p>Ansari Complex (2nd Floor)
                          160, Sher-e-Bangla Road, Khulna, Bangladesh
                          </p>
                        
                    </div>
                    <div className="d-flex">
                        <img src={img5} alt="" />
                        <p>041-720886</p>
                        
                    </div>
                    <div className="d-flex">
                        <img src={img6} alt="" />
                        <p>bsaa.khulna@gmail.com</p>
                        
                    </div>
                </div>
                </div>

            </div>
            <div className="col-6">
                <div >
                     <h2 className="text-center text-white">Get In Touch</h2>

                </div>
               <Form>
               <Col className="p-2">
               <Form.Control  placeholder="First name" />
               </Col>
               <Col className="p-2">
               <Form.Control  type="email" placeholder="Enter email" />
               </Col>
               <Col className="p-2">
               <Form.Control  type="email" placeholder="Subject" />

               </Col>
               <Col className="p-2">
               <FloatingLabel  controlId="floatingTextarea2" >
                <Form.Control
                as="textarea"
                placeholder="Your Message "
                style={{ height: '100px' }}
                />
              </FloatingLabel>
               </Col>
               </Form>
              <div className="SendButton">
              <Button variant="outline-light">Send message</Button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Footer;