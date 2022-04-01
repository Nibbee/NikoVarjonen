import React from 'react';
import '../css/header.css'
import BTNS from './header_buttons';

const Header = () => {
    return(
        <header>
            <div className="container header__container">
                <h1>NIKO VARJONEN</h1>
                <h5 className="text-light">Business Information Technology Student </h5>
                <BTNS />
                <a href="#contact" className='scroll_down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header;