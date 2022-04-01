import React from "react";
import '../css/portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>MY PROJECTS</h2>

            <div className="container portfolio_container">
                <div className="portfolio">
                    <h3>Blackjack game</h3>
                    <div className="portfolio_content">
                        <article className="portfolio_details">
                            <div>
                                <h4>Blackjack game</h4>
                                <a href="https://github.com/Nibbee/Blackjack">Github Link</a>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="portfolio">
                    <h3>Recipe App</h3>
                    <div className="portfolio_content">
                        <article className="portfolio_details">
                            <div>
                                <h4>Recipe Application (Ongoing project)</h4>
                                <a href="">Github Link</a>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="portfolio">
                    <h3>My Personal Website</h3>
                    <div className="portfolio_content">
                        <article className="portfolio_details">
                            <div>
                                <h4>My personal website</h4>
                                <a href="">Github Link</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;