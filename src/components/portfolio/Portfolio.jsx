import React from "react";
import './portfolio.css'
import JizzaxCity from "./../../assets/jizzaxcity.png";

const portfolioData = [
  {
    id: 1,
    image: JizzaxCity,
    title: 'Jizzax City`s Website',
    github: 'https://github.com/anvarovM',
    demo: 'https://jizzaxcity-uz.vercel.app',
  },
  {
    id: 1,
    image: JizzaxCity,
    title: 'Jizzax City`s Website',
    github: 'https://github.com/anvarovM',
    demo: 'https://jizzaxcity-uz.vercel.app',
  },
  {
    id: 1,
    image: JizzaxCity,
    title: 'Jizzax City`s Website',
    github: 'https://github.com/anvarovM',
    demo: 'https://jizzaxcity-uz.vercel.app',
  },
  {
    id: 1,
    image: JizzaxCity,
    title: 'Jizzax City`s Website',
    github: 'https://github.com/anvarovM',
    demo: 'https://jizzaxcity-uz.vercel.app',
  },
  {
    id: 1,
    image: JizzaxCity,
    title: 'Jizzax City`s Website',
    github: 'https://github.com/anvarovM',
    demo: 'https://jizzaxcity-uz.vercel.app',
  },
  {
    id: 1,
    image: JizzaxCity,
    title: 'Jizzax City`s Website',
    github: 'https://github.com/anvarovM',
    demo: 'https://jizzaxcity-uz.vercel.app',
  },
]

const Portfolio = () => {
  return <section id="portfolio">
    <h5>My Resent Work</h5>
    <h2>Portfolio</h2>  

    <div className="container portfolio__container">
      {portfolioData.map(({ id, image, title, github, demo }) => {
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />  
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn">Git Hub</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        )
      })}
    </div>
  </section>;
};

export default Portfolio;
