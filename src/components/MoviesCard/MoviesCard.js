import React from "react";
import {Link, useLocation} from "react-router-dom";

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
        if (location.pathname === '/movies') {
            const movieToDelete = props.savedMovies.find(movie => movie.movieId === props.movie.id);
            props.onDeleteClick(movieToDelete);
        }
        if (location.pathname === '/saved-movies') {
            props.onDeleteClick(props.movie);
        }
    }

    return (
        <li className="movie">
            <Link to={props.movie.trailerLink} target="_blank">
            <img src={props.imageLink} alt="Постер фильма"
                 className="movie__image"/>
            </Link>
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