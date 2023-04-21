import React from "react";
import profileAvatar from "../../images/profile-avatar.svg"
import {Link, useLocation} from "react-router-dom";
import Logo from "../Logo/Logo";

function Header() {
    const location = useLocation();

    return (
        <>
            {(location.pathname === '/' || location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') ?
                <header className="header">
                    <Logo/>

                    {location.pathname === '/' &&
                        <div className="header__menu">
                            <Link className="header__signup" to='/signup'>
                                Регистрация
                            </Link>
                            <Link className="header__signin" to='/signin'>
                                Войти
                            </Link>
                        </div>
                    }

                    {/* Переделать на props.LoggedIn */}
                    {(location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile') &&
                        <>
                            <ul className="header__navbar">
                                <li className="header__navbar-link header__navbar-link_active">
                                    <Link className="header__navbar-link-item" to='/movies'>
                                        Фильмы
                                    </Link>
                                </li>
                                <li className="header__navbar-link">
                                    <Link className="header__navbar-link-item" to='/saved-movies'>
                                        Сохранённые фильмы
                                    </Link>
                                </li>
                            </ul>
                            <div className="header__profile">
                                <Link className="header__profile-button" to='/profile'>Аккаунт</Link>
                                <div className="header__logo-block">
                                    <img src={profileAvatar} alt="Иконка в виде символа человека"
                                         className="header__profile-logo"/>
                                </div>
                            </div>
                        </>
                    }
                </header>
                : null
            }
        </>
    );
}

export default Header;