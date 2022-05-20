import React from "react";
import '../Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

function Footer() {
    return (
        <footer className="footer"> 
            <FontAwesomeIcon icon={brands('twitter')} />
            <p>h1</p>
        </footer>
    );
}

export default Footer;