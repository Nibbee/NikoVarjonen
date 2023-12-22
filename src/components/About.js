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
                    <h3 className="text-light">Niko Varjonen</h3>
                    <h3 className="text-light">30 years old</h3>
                    <h3 className="text-light">Turku, Southwest Finland </h3>
                    </p>
                    <p><h2 className="text-light">Education </h2>
                    </p>
                    <p>
                        As an employee I am spontaneous, reliable and hard-working. My work experience
                        in the restaurant industry has taught me resilience to pressure and customer service. 
                        I'm extreamly excited and motivated to learn new things and I'm always looking to improve myself. 
                        My hobbies include going to gym and walking outside with my dog. I also enjoy 
                        playing videogames on my spare time, especially fps games. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;