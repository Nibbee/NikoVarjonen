import React from 'react';
import '../../css/header.css'
import CTA from './CTA';
import ME from '../../images/ME.png';

const Header = () => {
    return(
        <header>
            <div className="container header__container">
                <h1>Niko Varjonen</h1>
                <h5 className="text-light">Business Information Technology Student </h5>
                <CTA />
                <a href="#contact" className='scroll_down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header;