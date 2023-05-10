import React from "react";
import {Link, useLocation} from "react-router-dom";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import ProfileButton from "../ProfileButton/ProfileButton";
import NavTab from "../NavTab/NavTab";

function Header(props) {
    const location = useLocation();

    return (props.isLoggedIn && (location.pathname === '/movies' || location.pathname === '/saved-movies' || location.pathname === '/profile' || location.pathname === '/') ?
        (<header className={`header ${location.pathname === '/' ? `header_promo` : ``}`}>
            <div className="header__container">
                <Logo/>
                <div onClick={props.onClick} id='burger_button'
                     className={`header__menu-burger ${props.isActive ? `header__menu-burger_active` : ``}`}>
                    <span className="header__menu-burger-span"></span>
                </div>
                <Navigation/>
                <ProfileButton/>
                <NavTab
                    isActive={props.isActive}
                    closeNavTab={props.onClose}
                />
            </div>
        </header>) : location.pathname === '/' ? (
            <header className={'header header_promo'}>
                <div className="header__container">
                    <Logo/>
                    <div className="header__menu">
                        <Link className="header__signup" to='/signup'>
                            Регистрация
                        </Link>
                        <Link className="header__signin" to='/signin'>
                            Войти
                        </Link>
                    </div>
                </div>
            </header>) : null);
}

export default Header;