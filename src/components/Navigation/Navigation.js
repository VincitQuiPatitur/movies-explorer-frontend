import {Link, useLocation} from "react-router-dom";
import React from "react";

function Navigation() {
    const location = useLocation();
    const moviesActive = (location.pathname === '/movies' ? 'navigation__navbar-link_active' : "");
    const savedMoviesActive = (location.pathname === '/saved-movies' ? 'navigation__navbar-link_active' : "");

    return (
        <nav className='navigation'>
            <ul className="navigation__navbar">
                <li className={`navigation__navbar-link ${moviesActive}`}>
                    <Link className="navigation__navbar-link-item" to='/movies'>
                        Фильмы
                    </Link>
                </li>
                <li className={`navigation__navbar-link ${savedMoviesActive}`}>
                    <Link className="navigation__navbar-link-item" to='/saved-movies'>
                        Сохранённые фильмы
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;