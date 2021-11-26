import React from 'react';
import './SectionFour.css'
import Button from 'react-bootstrap/Button'
const SectionFour = (props) => {
    const {img,paragrap,title,iconOne,iconTwo,iconThree,month,seat,date} = props.Datapass
    console.log(props)
    return (   
      
        <div >
            <div className="box ml-3 mb-5">
               <div className="BoxImg">
                   <img src={img} alt="" />
               </div>
               <div className="p-3">
                   <p>{paragrap}</p>
                   <h2 className="boxTitle">{title}</h2>
                   <div className="d-flex ">
                      
                      <div className="pr-5">
                      <img src={iconOne} alt="" />
                      <p>{month}</p>
                      </div>
                      <div className="pl-5-">
                      <img src={iconTwo} alt="" />
                      <p>{seat}</p>
                      </div>
                     <div className="pl-5">
                     <img src={iconThree} alt="" />
                      <p>{date}</p>
                     </div>
                   </div>
                   <div className="d-flex">
                        <div>
                        <h2 className="boxCourse">Course</h2>
                        <p>Tk20,000</p>
                        </div>
                        <div className="EnrollButton pt-2" >
                        <Button variant="outline-info">ENROLL NOW</Button>
                        </div>

                   </div>
               </div>

            </div> 
            
        </div>
    );
};

export default SectionFour;