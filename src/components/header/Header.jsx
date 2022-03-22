import React from 'react';
import '../../css/header.css'
import CTA from './CTA';
import ME from '../../images/ME.png';

const Header = () => {
    return(
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Niko Varjonen</h1>
                <h5 className="text-ligth">Student </h5>
                <CTA />

                <div className="me">
                    <img src={ME} className="img" />
                </div>

                <a href="#contact" className='scroll_down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header;