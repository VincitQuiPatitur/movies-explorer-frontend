import React, {useEffect, useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
    const [step, setStep] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const isCheckedSavedMoviesValue = localStorage.getItem('isCheckedSavedMovies');
        if (isCheckedSavedMoviesValue) {
            props.setIsChecked(JSON.parse(isCheckedSavedMoviesValue));
        }

        const searchInputSavedMoviesValue = localStorage.getItem('searchInputSavedMovies');
        if (searchInputSavedMoviesValue) {
            props.setSearchInputValue(JSON.parse(searchInputSavedMoviesValue));
        }

        const filteredSavedMoviesValue = localStorage.getItem('filteredSavedMovies');
        if (filteredSavedMoviesValue) {
            setFilteredMovies(JSON.parse(filteredSavedMoviesValue));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('isCheckedSavedMovies', JSON.stringify(props.isChecked));
        localStorage.setItem('searchInputSavedMovies', JSON.stringify(props.searchInputValue));
    }, [props.isChecked, props.searchInputValue]);

    useEffect(() => {
        if (filteredMovies.length > 0) {
            localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredMovies));
        }
    }, [filteredMovies]);

    const handleSearch = (searchInputValue) => {
        setStep(0);
        console.log(searchInputValue);
        if (!searchInputValue) {
            setFilteredMovies(props.savedMovies);
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
        localStorage.setItem('filteredSavedMovies', JSON.stringify(filteredMovies));
        setFilteredMovies(filteredMovies)
    };

    return (
        <div className="movies">
            <SearchForm
                onSearch={handleSearch}
                isChecked={props.isChecked}
                setIsChecked={props.setIsChecked}
                searchInputValue={props.searchInputValue}
                setSearchInputValue={props.setSearchInputValue}
            />
            <MoviesCardList
                filteredMovies={filteredMovies}
                savedMovies={props.savedMovies}
                isChecked={props.isChecked}
                onDeleteClick={props.onDeleteClick}
                errorMessage={errorMessage}
                step={step}
                setStep={setStep}
            />
        </div>
    );
}

export default SavedMovies;