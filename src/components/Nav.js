import React from "react";
import '../css/nav.css'
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {MdOutlineContactPhone} from 'react-icons/md';
import {MdWorkOutline} from 'react-icons/md'
import {useState} from 'react';

const Nav = () => {

    const [activeNav, setActive] = useState('#');

    return (
        <nav>
            <a href="#" onClick={() => setActive('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActive('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#contact" onClick={() => setActive('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactPhone/></a>
            <a href="#skills" onClick={() => setActive('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook/></a>
            <a href="#experience" onClick={() => setActive('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline/></a>
        </nav>
    )
}

export default Nav;