import React, { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    const [shortMovies, setShortMovies] = useState(false);
    const [isShortFilmChecked, setShortFilmChecked] = React.useState(false);

    function handleFilterToggle() {
        setShortMovies(!shortMovies);
    }

    function handleShortFilmCheckboxChange() {
        setShortFilmChecked(!isShortFilmChecked);
    }

    return (
        <div className='movies'>
            <SearchForm
                onFilterToggle={handleFilterToggle}
                isShortFilmChecked={isShortFilmChecked}
                onShortFilmCheckboxChange={handleShortFilmCheckboxChange}
                onSearch={props.onSearch}
            />
            <MoviesCardList
                //movies={movies}
                savedMovies={props.savedMovies}
                filteredMovies={props.filteredMovies}
                isShortFilmChecked={isShortFilmChecked}
                onLikeClick={props.onLikeClick}
                onDeleteClick={props.onDeleteClick}
                errorMessage={props.errorMessage}
            />
        </div>
    );
}

export default Movies;