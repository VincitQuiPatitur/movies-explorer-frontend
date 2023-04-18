import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
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
    )
}

export default Footer;