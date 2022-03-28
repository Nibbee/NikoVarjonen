import React from "react";
import { MdOutlineWorkOutline } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import '../../css/about.css'
import ME from '../../images/ME.png';

const About = () => {
    return (
        <section id="about">
            <h2>About me</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <artice className="about_card">
                            <MdOutlineWorkOutline className="about_icon" />
                            <h5>Work Experience</h5>
                            <small>9+ Years</small>
                        </artice>

                        <artice className="about_card">
                            <FiUser className="about_icon" />
                            <h5>Education</h5>
                            <small>Bachelor Student</small>
                        </artice>

                        <artice className="about_card">
                            <VscFolderLibrary className="about_icon" />
                            <h5>Projects</h5>
                            <small>0-5</small>
                        </artice>
                    </div>
                    <p>
                        Hey my name is Niko Varjonen and I'm 28 years old. 
                        I'm a former chef with over 9 years of experience from the field.
                        Currently I'm studying Business Information Technology at 
                        Turku University of Applied Sciences. 
                    </p>
                    <p>
                        As an employee I am spontaneous, reliable and hard-working. My work experience
                        in the restaurant industry has taught me resilience to pressure and customerservice. 
                        I'm extreamly excited and motivated to learn new things and my goal is to make the most 
                        of my studies in terms of both theoretical and practiical competence. 
                    </p>
                    <a href="#contact" className="btn btn-primary">Contact me</a>
                </div>
            </div>
        </section>
    )
}

export default About;