import React from "react";
import {Link, useLocation} from "react-router-dom";

function Footer() {
    const location = useLocation();

    return (
        <>
            {(location.pathname !== '/profile' && location.pathname !== '/signin' && location.pathname !== '/signup') &&
                <footer className="footer">
                    <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__under-line">
                        <p className="footer__copyright">&copy; 2023</p>
                        <div className="footer__links">
                            <Link className="footer__link" to='https://practicum.yandex.ru/'>Яндекс.Практикум</Link>
                            <Link className="footer__link" to='https://github.com/'>GitHub</Link>
                        </div>
                    </div>
                </footer>
            }
        </>
    )
}

export default Footer;