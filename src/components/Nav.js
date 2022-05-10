import React from "react";
import '../css/nav.css'
import {useState} from 'react';

const Nav = () => {

    const [activeNav, setActive] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActive('#')} className={activeNav === '#' ? 'active' : ''}>HOME</a>
            <a href="#about" onClick={() => setActive('#about')} className={activeNav === '#about' ? 'active' : ''}>ABOUT</a>
            <a href="#skills" onClick={() => setActive('#skills')} className={activeNav === '#skills' ? 'active' : ''}>SKILLS</a>
            <a href="#experience" onClick={() => setActive('#experience')} className={activeNav === '#experience' ? 'active' : ''}>EXPERIENCE</a>
            <a href="#contact" onClick={() => setActive('#contact')} className={activeNav === '#contact' ? 'active' : ''}>CONTACT</a>
        </nav>
    )
}

export default Nav;