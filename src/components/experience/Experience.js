import React from "react";
import {CgWorkAlt} from 'react-icons/cg'
import '../../css/experience.css'

const Experience = () => {
    return (
        <section id="experience">
            <h2>My Work Experience</h2>

            <div className="container experience_container">
                <div className="experience">
                    <h3>Mahile Oy</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Job</h4>
                                <small className="text-light">Chef</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Time</h4>
                                <small className="text-light">12.06.2018 -</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Tasks</h4>
                                <small className="text-light">Customer service</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience">
                    <h3>Stadionmarkkinointi Oy</h3>
                    <div className="experience_content">
                    <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Job</h4>
                                <small className="text-light">Chef</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Time</h4>
                                <small className="text-light">16.09.2014 - 05.06.2018</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Tasks</h4>
                                <small className="text-light">Customer service</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience">
                    <h3>VMP Group</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Job</h4>
                                <small className="text-light">Chef</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Time</h4>
                                <small className="text-light">29.08.2013 - 31.05.2014</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Tasks</h4>
                                <small className="text-light">Customer service</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience">
                    <h3>Kultaranta Resort Oy</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Job</h4>
                                <small className="text-light">Chef</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Time</h4>
                                <small className="text-light">01.06.2014 - 22.08.2014</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Tasks</h4>
                                <small className="text-light">Customer service</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="experience">
                    <h3>Jesse's Dine Oy</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Job</h4>
                                <small className="text-light">Chef</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Time</h4>
                                <small className="text-light">01.09.2012 - 20.12.2012</small>
                            </div>
                        </article>
                        <article className="experience_details">
                            <CgWorkAlt className="experience_details-icon" />
                            <div>
                                <h4>Tasks</h4>
                                <small className="text-light">Customer service</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience;