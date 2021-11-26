import React from 'react';
import Button from 'react-bootstrap/Button'
import Headerlogo from '../Img/logo 1.png'
import './Header.css'
const Header = () => {
    return (
        <div className="container">
             <div className="row  pt-3">
             <div className="col-3">
                 <img src={Headerlogo} alt="Headerlogo" />
             </div>
             <div className="col-6">
             <ul className="nav">
               <li className="nav-item catagory colorA">
                 <a className="nav-link active" href="#">Enroll For Course</a>
               </li>
               <li className="nav-item colorA">
                 <a className="nav-link" href="#">Meet Your Trainers</a>
             </li>
  
             </ul>
             </div>
             <div className="col-3">
                 <div className="ButtonRight">
                 <Button variant="outline-primary"><span className="LogInButton">log in</span></Button>

                 </div>
             </div>
             </div>
        </div>
    );
};

export default Header;