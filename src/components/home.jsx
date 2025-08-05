import { useState } from 'react'
import { useEffect } from 'react'
import HenryPro from "../img/henry_pro.jpg"
import Sitting from "../img/sitting.png"
import SingleHPfp from "../img/singleH_pfp.png"
import SingleHScreenshot from "../img/singleH_screenshot.png"
import { Link } from "react-router-dom"

export default function home() {
    return (
        <>
            <header>
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                    </ul>
                </nav>
            </header>
            
            <section className="intro" id="home">
                <h1 className="section__title section__title--intro">
                    Hi, I am <strong>Henry Zhang</strong>
                </h1>
                <p className="section__subtitle section__subtitle--intro">Software Developer</p>
                <img src={HenryPro} alt="a picture of Henry Zhang smiling" className="intro__img"/>
            </section>
            
            <section className="about-me" id="about">
               <h2 className="section__title section__title--about">Who I am</h2>
               <p className="section__subtitle section__subtitle--about">Developer based out of Austin, Texas</p>
               
               <div className="about-me__body">
                   <p>I'm Henry, a UT Austin Computer Science grad. I'm passionate about using technology to create real products which improve the lives of others. I'm a quick learner and a good communicator, and have practical experience with code development, review, and deployment.</p>
               </div>
               
               <img src={Sitting} alt="Jane leaning against a bus" className="about-me__img"/>
            </section>
            
            <section className="my-work" id="work">
                <h2 className="section__title section__title--work">My work</h2>
                <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
                
                <div className="portfolio">
                    <Link to="portfolioItem1" className="portfolio__item">
                        <img src={SingleHScreenshot} alt="" className="portfolio__img"/>
                    </Link>
                </div>
            </section>
            
            
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