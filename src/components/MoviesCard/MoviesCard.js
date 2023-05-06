import React from "react";
import {useLocation} from "react-router-dom";

/* 3 вида состояния кнопки:
    кнопка не активна - класс movie__favorite-button
    кнопка активна - добавляется класс movie__favorite-button_added
    кнопка в профиле сохранненных фильмов - добавляется класс movie__favorite-button_delete
    */

function MoviesCard(props) {
    const location = useLocation();
    const isLiked = props.savedMovies.some(movie => movie.movieId === props.movie.id);

    function convertDuration(durationInMinutes) {
        const hours = Math.floor(durationInMinutes / 60);
        const minutes = durationInMinutes % 60;
        return `${hours}ч ${minutes}м`;
    }

    function handleLikeMovieClick() {
        props.onLikeClick(props.movie);
    }

    function handleDeleteMovieClick() {
        const movieToDelete = props.savedMovies.find(movie => movie.movieId === props.movie.id);
        props.onDeleteClick(movieToDelete);
    }

    return (
        <li className="movie">
            <img src={`https://api.nomoreparties.co${props.movie.image.url}`} alt="Постер фильма"
                 className="movie__image"/>
            <div className="movie__description">
                <p className="movie__title">{props.movie.nameRU}</p>
                {location.pathname === '/movies' &&
                    <button
                        className={`movie__favorite-button ${isLiked && 'movie__favorite-button_added'}`}
                        type="button"
                        onClick={isLiked ? handleDeleteMovieClick : handleLikeMovieClick}
                    ></button>
                }
                {location.pathname === '/saved-movies' &&
                    <button
                        className='movie__favorite-button movie__favorite-button_delete'
                        type="button"
                        onClick={handleDeleteMovieClick}
                    ></button>
                }
                <p className="movie__duration">{convertDuration(props.movie.duration)}</p>
            </div>
        </li>
    );
}

export default MoviesCard;