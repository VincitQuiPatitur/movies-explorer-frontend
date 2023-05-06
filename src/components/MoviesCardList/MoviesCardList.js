import React, {useEffect, useState} from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
    const [cardsToShow, setCardsToShow] = useState(0);
    const [step, setStep] = useState(0);

    useEffect(() => {
        if (window.innerWidth >= 1280) {
            setCardsToShow(12);
        } else if (window.innerWidth >= 768) {
            setCardsToShow(8);
        } else {
            setCardsToShow(5);
        }
    }, []);

    function handleShowMoreClick() {
        if (window.innerWidth >= 1280) {
            setStep(step => step + 3);
        } else {
            setStep(step => step + 2);
        }
    }

    const renderMovies = () => {
        /*const filteredMovies = props.filteredMovies.filter((movie) => {
            if (!props.isShortFilmChecked) return true;
            return movie.duration <= 40;
        });*/

        return props.filteredMovies.slice(0, cardsToShow + step).map((movie) => (
            <MoviesCard
                key={movie.id}
                movie={movie}
                onLikeClick={props.onLikeClick}
                onDeleteClick={props.onDeleteClick}
                savedMovies={props.savedMovies}
            />
        ));
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