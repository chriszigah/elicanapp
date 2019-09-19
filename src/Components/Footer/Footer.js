import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../Config'; 



const Footer = () => {
    return(
        <div className="footer">
            <Link to="/" className="logo">
                <img alt="Elican logo" src="./logo.png"/>
            </Link>
            <div className="right">
                @ELICAN SCHOOL  {CURRENT_YEAR} All rights reserved
            </div>
        </div>
    )
}

export default Footer;
