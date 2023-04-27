import React from "react";
import movieImage from "../../images/film-image.png"

/* 3 вида состояния кнопки:
    кнопка не активна - класс movie__favorite-button
    кнопка активна - добавляется класс movie__favorite-button_added
    кнопка в профиле сохранненных фильмов - добавляется класс movie__favorite-button_delete
    */

function MoviesCard() {
    return (
        <li className="movie">
            <img src={movieImage} alt="Постер фильма" className="movie__image"/>
            <div className="movie__description">
                <p className="movie__title">33 слова о дизайне</p>
                <button className="movie__favorite-button movie__favorite-button_added"></button>
                <p className="movie__duration">1ч42м</p>
            </div>
        </li>
    );
}

export default MoviesCard;