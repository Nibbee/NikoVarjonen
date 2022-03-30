import React from "react";
import '../../css/portfolio.css'

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h2>My Projects</h2>

            <div className="container portfolio_container">
                <div className="portfolio">
                    <h3>Blackjack game</h3>
                    <div className="portfolio_content">
                        <article className="portfolio_details">
                            <div>
                                <h4>Blackjack game</h4>
                                <a href="https://github.com/Nibbee/Blackjack">Github</a>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="portfolio">
                    <h3>Recipe App</h3>
                    <div className="portfolio_content">
                        <article className="portfolio_details">
                            <div>
                                <h4>Recipe Application</h4>
                                <a href="">Github</a>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;