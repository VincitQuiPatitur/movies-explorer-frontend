import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";
import {
    AVERAGE_CARDS_NUMBER,
    AVERAGE_SCREEN_WIDTH,
    BIG_CARDS_STEP,
    LARGE_CARDS_NUMBER,
    MAX_SCREEN_WIDTH,
    SHORT_MOVIE_DURATION,
    SMALL_CARDS_NUMBER,
    SMALL_CARDS_STEP
} from "../../utils/constants";

function MoviesCardList(props) {
    const [cardsToShow, setCardsToShow] = useState(0);
    const location = useLocation();

    useEffect(() => {
        if (window.innerWidth >= MAX_SCREEN_WIDTH) {
            setCardsToShow(LARGE_CARDS_NUMBER);
        } else if (window.innerWidth >= AVERAGE_SCREEN_WIDTH) {
            setCardsToShow(AVERAGE_CARDS_NUMBER);
        } else {
            setCardsToShow(SMALL_CARDS_NUMBER);
        }
    }, [location.pathname]);

    function handleShowMoreClick() {
        if (window.innerWidth >= MAX_SCREEN_WIDTH) {
            props.setStep(step => step + BIG_CARDS_STEP);
        } else {
            props.setStep(step => step + SMALL_CARDS_STEP);
        }
    }

    const renderMovies = () => {
        let moviesToRender = [];


        if (location.pathname === '/movies' || (location.pathname === '/saved-movies' && props.filteredMovies.length > 0)) {
            moviesToRender = props.filteredMovies;

            if (props.isChecked) {
                moviesToRender = moviesToRender.filter(movie => movie.duration <= SHORT_MOVIE_DURATION);
            }
        }

        const moviesToShow = moviesToRender.slice(0, cardsToShow + props.step);

        return moviesToShow.map(movie => (
            <MoviesCard
                key={movie.id || movie.movieId}
                movie={movie}
                onLikeClick={props.onLikeClick}
                onDeleteClick={props.onDeleteClick}
                savedMovies={props.savedMovies}
                imageLink={location.pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : movie.image}
                filteredMovies={props.filteredMovies}
                setFilteredMovies={props.setFilteredMovies}
            />
        ));
    }

    const isShowing = renderMovies().length < props.filteredMovies.length && renderMovies().length >= cardsToShow;

    return (
        <section className="movies-section">
            {(props.filteredMovies.length > 0 || (location.pathname === '/saved-movies' && props.savedMovies.length > 0)) &&
                <ul className="movies-section__container">
                    {renderMovies()}
                </ul>
            }
            <div className="movies-section__more">
                {(isShowing)
                    ? <button className="movies-section__more-button" onClick={handleShowMoreClick}>Ещё</button>
                    : <span className="movies-section__more-span">{props.errorMessage}</span>
                }
            </div>
        </section>
    );
}

export default MoviesCardList;