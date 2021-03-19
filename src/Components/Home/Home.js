import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import bg from '../../images/Bg.png';
import logo from '../../images/Urban Riders.png';
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
            <nav className= "nav">
                <ul>
                    <li>
                        <img  className ="logo"src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link >Destination</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <div style={{display:"flex", margin:"100px",padding:"30px", justifyContent:"space-between"}}>
                {
                    transports.map(transport => <Transport transport={transport} key= {transport.id}></Transport>)
                }
            </div>
    
        </div>
    );
};

export default Home;