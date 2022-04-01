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
                        <a href="https://github.com/Nibbee/Blackjack">Github Link</a>
                    </div>
                </div>

                <div className="portfolio">
                    <h3>Recipe App (Ongoing project)</h3>
                    <div className="portfolio_content">
                        <a href="https://github.com/Nibbee/Recipe-App">Github Link</a>
                    </div>
                </div>

                <div className="portfolio">
                    <h3>My Personal Website</h3>
                    <div className="portfolio_content">
                        <a href="https://github.com/Nibbee/nikovarjonen">Github Link</a> 
                    </div>
                </div>

                <div className="portfolio">
                    <h3>My Covid Holidays (School group project)</h3>
                    <div className="portfolio_content">
                        <a href="https://github.com/Nibbee/MyCovidHolidays">Github Link</a> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;