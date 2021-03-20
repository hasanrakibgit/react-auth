import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Urban Riders.png';
import './Header.css';

const Header = () => {
    return (
        <div>
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
        </div>
    );
};

export default Header;