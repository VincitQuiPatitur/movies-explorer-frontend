import React from "react";
import {Link} from "react-router-dom";
import linkArrow from "../../images/link-arrow.svg";

function Portfolio() {
    return (
        <section className='portfolio'>
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__links">
                <li className="portfolio__link">
                    <Link className="portfolio__link-item" to='https://github.com/VincitQuiPatitur/how-to-learn'>
                        <p className="portfolio__link-text">Статичный сайт</p>
                        <img src={linkArrow} alt="Стрелка" className="portfolio__link-arrow"/>
                    </Link>
                </li>
                <li className="portfolio__link">
                    <Link className="portfolio__link-item" to='https://vincitquipatitur.github.io/russian-travel/'>
                        <p className="portfolio__link-text">Адаптивный сайт</p>
                        <img src={linkArrow} alt="Стрелка" className="portfolio__link-arrow"/>
                    </Link>
                </li>
                <li className="portfolio__link">
                    <Link className="portfolio__link-item" to='https://mesto.kostrova.nomoredomains.work/'>
                        <p className="portfolio__link-text">Одностраничное приложение</p>
                        <img src={linkArrow} alt="Стрелка" className="portfolio__link-arrow"/>
                    </Link>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;