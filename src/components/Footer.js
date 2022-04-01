import React from "react";
import {AiOutlineLinkedin, AiFillGithub} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import '../css/footer.css'

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer_logo">NIKO VARJONEN</a>
          

            <div className="footer_socials">
                <a href="https://www.facebook.com/nvarjonen"><FaFacebookF/></a>
                <a href="https://github.com/Nibbee"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/niko-varjonen-24417317a/"><AiOutlineLinkedin/></a>
            </div>
        </footer>
    )
}

export default Footer;