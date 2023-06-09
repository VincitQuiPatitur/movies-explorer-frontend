import {Link, useLocation} from "react-router-dom";
import React from "react";

function Navigation(props) {
    const location = useLocation();
    const promoActive = (location.pathname === '/' ? 'navigation__navbar-link_active' : "")
    const moviesActive = (location.pathname === '/movies' ? 'navigation__navbar-link_active' : "");
    const savedMoviesActive = (location.pathname === '/saved-movies' ? 'navigation__navbar-link_active' : "");

    return (
        <nav className='navigation'>
            <ul className="navigation__navbar">
                <li className={`navigation__navbar-link ${promoActive}`}>
                    <Link
                        className="navigation__navbar-link-item"
                        to='/'
                        onClick={props.closeNavTab}>
                        Главная
                    </Link>
                </li>
                <li className={`navigation__navbar-link ${moviesActive}`}>
                    <Link
                        className="navigation__navbar-link-item"
                        to='/movies'
                        onClick={props.closeNavTab}>
                        Фильмы
                    </Link>
                </li>
                <li className={`navigation__navbar-link ${savedMoviesActive}`}>
                    <Link
                        className="navigation__navbar-link-item"
                        to='/saved-movies'
                        onClick={props.closeNavTab}>
                        Сохранённые фильмы
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;