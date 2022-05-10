import React from "react";
import { CgWorkAlt } from 'react-icons/cg'
import '../css/experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h2>MY WORK EXPERIENCE</h2>

            <div className="container experience_container">
                <div className="experience">
                    <h2>Tietokeskus</h2>
                    <div className="experience_content">
                        <h4>Job: IT Support</h4>
                        <h4>Time: 02.05.2022 -</h4>
                        <h4>Task: IT support, customer service,</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>Mahile Oy</h2>
                    <div className="experience_content">
                        <h4>Job: Chef</h4>
                        <h4>Time: 12.06.2018 -</h4>
                        <h4>Task: Customer service</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>Stadionmarkkinointi Oy</h2>
                    <div className="experience_content">
                        <h4>Job: Chef</h4>
                        <h4>Time: 16.09.2014 - 05.06.2018</h4>
                        <h4>Task: Customer service, ordering supplies, managing inventory</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>VMP Group</h2>
                    <div className="experience_content">
                        <h4>Job: Chef</h4>
                        <h4>Time: 29.08.2013 - 31.05.2014</h4>
                        <h4>Task: Customer service</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>Kultaranta Resort Oy</h2>
                    <div className="experience_content">
                        <h4>Job: Chef</h4>
                        <h4>Time: 01.06.2014 - 22.08.2014</h4>
                        <h4>Task: Customer service</h4>
                    </div>
                </div>

                <div className="experience">
                    <h2>Jesse's Dine Oy</h2>
                    <div className="experience_content">
                        <h4>Job: Chef</h4>
                        <h4>Time: 01.09.2012 - 20.12.2012</h4>
                        <h4>Task: Customer service</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;