import React from "react";
import bannerImage from "../../images/banner-image.svg";
import {Link} from "react-router-dom";

function Promo() {
    return (
        <section className="promo">
            <div className="promo__container">
                <div className="promo__text">
                    <h1 className="promo__title">Учебный проект студента факультета Веб-&nbsp;разработки.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его
                        создателя.</p>
                    <Link to="/signin" className="promo__link">Узнать больше</Link>
                </div>
                <img src={bannerImage} alt="Глобус, составленный из слов web" className="promo__image"/>
            </div>
        </section>
    );
}

export default Promo;