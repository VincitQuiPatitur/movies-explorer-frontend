import React from "react";
import profileAvatar from "../../images/profile-avatar.svg"
import {Link, useLocation} from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

function Header(props) {
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
                            <div onClick={props.onClick} id='burger_button'
                                className={`header__menu-burger ${props.isActive ? `header__menu-burger_active` : ``}`}>
                                <span className="header__menu-burger-span"></span>
                            </div>
                            <Navigation/>
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