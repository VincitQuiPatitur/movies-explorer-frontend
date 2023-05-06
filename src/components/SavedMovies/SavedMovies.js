import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const [isShortSavedFilmChecked, setShortSavedFilmChecked] = React.useState(false);

    function handleFilterToggle(isChecked) {
        console.log("Short film filter is toggled to", isChecked);
    }
    function handleShortFilmCheckboxChange() {
        setShortSavedFilmChecked(!isShortSavedFilmChecked);
    }

    return (
        <div className="movies">
            <SearchForm
                onFilterToggle={handleFilterToggle}
                isShortFilmChecked={isShortSavedFilmChecked}
                onShortFilmCheckboxChange={handleShortFilmCheckboxChange}
                onSearch={props.onSearch}
            />
            <MoviesCardList
                //movies={movies}
                filteredMovies={props.filteredMovies}
                savedMovies={props.savedMovies}
                isShortFilmChecked={isShortSavedFilmChecked}
                onDeleteClick={props.onDeleteClick}
                errorMessage={props.errorMessage}
            />
        </div>
    );
}

export default SavedMovies;