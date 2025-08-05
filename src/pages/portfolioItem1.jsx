import HenryPro from "../img/henry_pro.jpg"
import SingleHPfp from "../img/singleH_pfp.png"
import SingleHScreenshot from "../img/singleH_screenshot.png"

export default function portfolioItem1() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="img/devjane.png" alt="" />
                </div>
            </header>
            

            <section className="intro">
                <h1 className="section__title section__title--intro">
                    SingleH Collection
                </h1>
                <p className="section__subtitle section__subtitle--intro">Compilation of Reviews from SingleH</p>
                <img src={SingleHPfp} alt="" className="intro__img" />
            </section>
            
            <div className="portfolio-item-individual">
                <p></p>
                <img src={SingleHScreenshot} alt="" />
                <p></p>
                <p>The goal of this project was to compile reviews, thoughts and musings by user singleH on the site myanimelist.net.</p>
                <p>This information would be presented and formated in a simple, easy to navigate format.</p>
                <p>When MyAnimeList was wholly acquired by Gaudiy Inc. in May 2025, the worry was that much of data on the site would be lost.</p>
                <p>So it was a personal goal of mine to perserve this small piece of the internet.</p>
            </div>
            
            
            <footer className="footer">
                <a href="mailto:hello@jane.dev" className="footer__link">henryzhang99@gmail.com</a>
                <ul className="social-list">
                    <li className="social-list__item">
                        <a className="social-list__link" href="https://github.com/henry-zhang-exe">
                            <i className="fab fa-github"></i>
                        </a>
                        <a className="social-list__link" href="https://www.linkedin.com/in/henry-zhang-cs">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}