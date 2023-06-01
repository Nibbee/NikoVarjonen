import React from "react";
import '../css/experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h2>WORK EXPERIENCE</h2>

            <div className="container experience_container">
                <div className="experience">
                    <h2>Tietokeskus Finland Oy</h2>
                    <div className="experience_content">
                        <h4>IT SPECIALIST</h4>
                        <h4>02.05.2022 -</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>Mahile Oy</h2>
                    <div className="experience_content">
                        <h4>CHEF</h4>
                        <h4>12.06.2018 - 19.08.2022</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>Stadionmarkkinointi Oy</h2>
                    <div className="experience_content">
                        <h4>CHEF</h4>
                        <h4>16.09.2014 - 05.06.2018</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>VMP Group</h2>
                    <div className="experience_content">
                        <h4>CHEF</h4>
                        <h4>29.08.2013 - 31.05.2014</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>Kultaranta Resort Oy</h2>
                    <div className="experience_content">
                        <h4>CHEF</h4>
                        <h4>01.06.2014 - 22.08.2014</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>Jesse's Dine Oy</h2>
                    <div className="experience_content">
                        <h4>CHEF</h4>
                        <h4>01.09.2012 - 20.12.2012</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;