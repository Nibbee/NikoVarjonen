import React from 'react';
import '../css/header.css'
import BTNS from './header_buttons';

const Header = () => {
    return(
        <header>
            <div className="container header__container">
                <h1>NIKO VARJONEN</h1>
                <h5 className="text-light">BUSINESS INFORMATION TECHNOLOGY GRADUATE</h5>
                <h5 className="text-light">&</h5>
                <h5 className="text-light">USER SERVICES IT SPECIALIST</h5>
                <BTNS />
                <a href="#contact" className='scroll_down'>Scroll down</a>
            </div>
        </header>
    )
}

export default Header;