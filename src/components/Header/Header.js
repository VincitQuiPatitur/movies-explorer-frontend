import React from "react";
import headerLogo from "../../images/logo-header.svg";
import profileAvatar from "../../images/profile-avatar.svg"
import {Link, useLocation} from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
        <div className="header">
            <img src={headerLogo} alt="Логотип в виде зеленого круга с белой фигуркой" className="header__logo"/>

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

            {/* Header отображается пока только на /movies Переделать на props.LoggedIn, чтобы отображался после авторизации */}
            {location.pathname === '/movies' &&
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
                            <img src={profileAvatar} alt="Иконка в виде символа человека" className="header__profile-logo"/>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default Header;