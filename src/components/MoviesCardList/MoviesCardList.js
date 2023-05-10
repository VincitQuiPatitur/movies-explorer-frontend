import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import {useLocation} from "react-router-dom";

function MoviesCardList(props) {
    const [cardsToShow, setCardsToShow] = useState(0);

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
            props.setStep(step => step + 4);
        } else {
            props.setStep(step => step + 2);
        }
    }

    const renderMovies = () => {
        let moviesToRender = [];

        if (location.pathname === '/movies' || (location.pathname === '/saved-movies' && props.filteredMovies.length > 0)) {
            moviesToRender = props.filteredMovies;

            if (props.isChecked) {
                moviesToRender = moviesToRender.filter(movie => movie.duration <= 40);
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