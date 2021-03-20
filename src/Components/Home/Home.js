import React, { useEffect, useState } from 'react';

import bg from '../../images/Bg.png';

import './Home.css';
import transportData from '../Data/data.json';
import Transport from '../Transport/Transport';

const Home = () => {
    const [transports, setTransports]= useState([]);
    useEffect(()=>{
        setTransports(transportData);
        console.log(transportData);
    },[]);
    return (
        <div style = {{backgroundImage: `url(${bg})`}} className="back-ground">
            
            <div style={{display:"flex", margin:"100px",padding:"30px", justifyContent:"space-between"}}>
                {
                    transports.map(transport => <Transport transport={transport} key= {transport.id}></Transport>)
                }
            </div>
    
        </div>
    );
};

export default Home;