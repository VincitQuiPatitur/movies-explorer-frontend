import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";

function MoviesCardList(props) {
    const [cardsToShow, setCardsToShow] = useState(0);
    const [step, setStep] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (window.innerWidth >= 1280) {
            setCardsToShow(12);
        } else if (window.innerWidth >= 768) {
            setCardsToShow(8);
        } else {
            setCardsToShow(5);
        }
    }, [location.pathname]);

    function handleShowMoreClick() {
        if (window.innerWidth >= 1280) {
            setStep(step => step + 3);
        } else {
            setStep(step => step + 2);
        }
    }

    const renderMovies = () => {
        if (location.pathname === '/movies' || (location.pathname === '/saved-movies' && props.filteredMovies.length > 0)) {
            const filteredMovies = props.filteredMovies.filter((movie) => {
                if (!props.isShortFilmChecked) return true;
                return movie.duration <= 40;
            });

            return filteredMovies.slice(0, cardsToShow + step).map((movie) => (
                <MoviesCard
                    key={movie.id || movie.movieId}
                    movie={movie}
                    onLikeClick={props.onLikeClick}
                    onDeleteClick={props.onDeleteClick}
                    savedMovies={props.savedMovies}
                    imageLink={location.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
                />
            ));
        } else if (location.pathname === '/saved-movies') {
            return props.savedMovies.slice(0, cardsToShow + step).map((movie) => (
                <MoviesCard
                    key={movie.id || movie.movieId}
                    movie={movie}
                    onLikeClick={props.onLikeClick}
                    onDeleteClick={props.onDeleteClick}
                    savedMovies={props.savedMovies}
                    imageLink={movie.image}
                />
            ));
        } else {
            return null;
        }
    }

    return (
        <section className="movies-section">
            <ul className="movies-section__container">
                {renderMovies()}
            </ul>
            <div className="movies-section__more">
                {props.filteredMovies.length > 0 &&
                    <button className="movies-section__more-button" onClick={handleShowMoreClick}>Ещё</button>
                }
                <span className="movies-section__more-span">{props.errorMessage}</span>
            </div>
        </section>
    );
}

export default MoviesCardList;