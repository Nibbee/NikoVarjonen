import React from "react";
import '../css/skills.css'

const Skills = () => {
    return (
        <section id="skills">
            <h2>MY SKILLS</h2>

            <div className="container skill_container">
                <div className="skill_frontend">
                    <h2>Frontend Development</h2>
                    <div className="skill_content">
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Proficient</small>
                            </div>
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Proficient</small>
                            </div>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                    </div>
                </div>

                <div className="skill_backend">
                    <h2>Backend Development</h2>
                    <div className="skill_content">
                            <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;