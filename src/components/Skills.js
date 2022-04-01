import React from "react";
import { BsPatchCheckFill as BsPatchCheckFill} from 'react-icons/bs'
import '../css/skills.css'

const Skills = () => {
    return (
        <section id="skills">
            <h2>MY SKILLS</h2>

            <div className="container skill_container">
                <div className="skill_frontend">
                    <h3>Frontend Development</h3>
                    <div className="skill_content">
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Proficient</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Proficient</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="skill_backend">
                    <h3>Backend Development</h3>
                    <div className="skill_content">
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>NodeJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="skill_details">
                            <BsPatchCheckFill className="skill_details-icon" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;