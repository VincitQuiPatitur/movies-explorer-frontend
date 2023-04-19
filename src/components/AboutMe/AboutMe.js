import React from "react";
import {Link} from "react-router-dom";
import myPhoto from "../../images/avatar.png";

function AboutMe() {
    return (
        <section className='student'>
            <h2 className="about__title">Студент</h2>
            <div className="student__block">
                <div className="student__text-container">
                    <div className="student__info">
                        <h3 className="student__info-name">Арина Кострова</h3>
                        <p className="student__info-job">Фронтенд-разработчик, 23 года</p>
                        <p className="student__info-biography">Я родилась и живу в Санкт-Петербурге, закончила
                            информационные системы и технологии с отличием. Полюбила веб-разработку и стала учиться в
                            Яндекс.Практикуме, чтобы подтянуть свои знания. Нахожусь в активном поиске работы.</p>
                    </div>
                    <Link to='https://github.com/VincitQuiPatitur' className='student__link'>GitHub</Link>
                </div>
                <img src={myPhoto} className='student__photo' alt="Фотография со мной"/>
            </div>
        </section>
    );
}

export default AboutMe;