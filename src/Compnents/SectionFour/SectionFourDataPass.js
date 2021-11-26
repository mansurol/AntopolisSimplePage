import React, { useState } from 'react';
import FakeData from '../FakeData/SectionFourData'
import SectionFour from './SectionFour';
const SectionFourDataPass = () => {
    console.log(FakeData)
    const [data , setdata] = useState(FakeData)

    return (
        <div className=" container d-flex">
            {
                data.map(data => <SectionFour Datapass={data}/> )
               
            }
        </div>
    );
};

export default SectionFourDataPass;