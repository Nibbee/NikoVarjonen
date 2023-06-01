import React from "react";
import '../css/about.css'
import ME from '../images/ME.png';

const About = () => {
    return (
        <section id="about">
            <h2>ABOUT ME</h2>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about_content">
                    <p>
                        Hey!
                    </p>
                    <p>
                        My name is Niko Varjonen, I'm 29 years old and I live in Turku.
                        I'm a former chef who's switching recipes and cooking to programming and data analyst! 
                        During my 9 year experience on the restaurant industry I worked in various restaurants and 
                        even on supermarkets. My passion has always been computers and I decided to make a career out of it!
                        Currently I'm studying Business Information Technology at 
                        Turku University of Applied Sciences. I'm speciliazing my studies to 
                        information security and software development. 
                        Currently I'm working as an IT Specialist at Tietokeskus Finland Oy. 
                    </p>
                    <p>
                        As an employee I am spontaneous, reliable and hard-working. My work experience
                        in the restaurant industry has taught me resilience to pressure and customer service. 
                        I'm extreamly excited and motivated to learn new things and my goal is to make the most 
                        of my studies in terms of both theoretical and practiical competence. 
                        My hobbies include going to gym and walking outside with my dog. I also enjoy 
                        playing videogames on my spare time, especially fps games. 
                        
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;