import React, {useEffect, useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {SHORT_MOVIE_DURATION} from "../../utils/constants";

function SavedMovies(props) {
    const [step, setStep] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [isCheckedSavedMovies, setIsCheckedSavedMovies] = useState(false);
    const [searchInputSavedMovies, setSearchInputSavedMovies] = useState('');

    useEffect(() => {
        const SavedMoviesValue = localStorage.getItem('SavedMovies');
        if (SavedMoviesValue) {
            props.setFilteredMovies(JSON.parse(SavedMoviesValue));
        }
    }, []);

    useEffect(() => {
        if (isCheckedSavedMovies) {
            const SavedMovies = props.savedMovies.filter((savedMovie) => savedMovie.duration <= SHORT_MOVIE_DURATION);
            props.setFilteredMovies(SavedMovies);
        } else {
            props.setFilteredMovies(props.savedMovies);
        }
    }, [props.savedMovies, isCheckedSavedMovies]);

    const handleSearch = (searchInputValue) => {
        props.setLoading(true);
        setStep(0);
        if (!searchInputValue) {
            props.setFilteredMovies(props.savedMovies);
            props.setLoading(false);
            return;
        }
        setErrorMessage('');

        const filteredMovies = props.savedMovies.filter((movie) => {
            const russianTitle = movie.nameRU
                .toLowerCase()
                .includes(searchInputValue.toLowerCase());
            const englishTitle = movie.nameEN
                .toLowerCase()
                .includes(searchInputValue.toLowerCase());
            return russianTitle || englishTitle;
        });

        if (filteredMovies.length === 0) {
            setErrorMessage("Ничего не найдено");
        }
        localStorage.setItem('SavedMovies', JSON.stringify(filteredMovies));
        props.setFilteredMovies(filteredMovies);
        props.setLoading(false);
    };

    return (
        <div className="movies">
            <SearchForm
                onSearch={handleSearch}
                isChecked={isCheckedSavedMovies}
                setIsChecked={setIsCheckedSavedMovies}
                searchInputValue={searchInputSavedMovies}
                setSearchInputValue={setSearchInputSavedMovies}
            />
            <MoviesCardList
                filteredMovies={props.filteredMovies}
                setFilteredMovies={props.setFilteredMovies}
                savedMovies={props.savedMovies}
                isChecked={isCheckedSavedMovies}
                onDeleteClick={props.onDeleteClick}
                errorMessage={errorMessage}
                step={step}
                setStep={setStep}
            />
        </div>
    );
}

export default SavedMovies;