import React, {useEffect, useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    const [step, setStep] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isCheckedMovies, setIsCheckedMovies] = useState(false);
    const [searchInputMovies, setSearchInputMovies] = useState('');

    useEffect(() => {
        const isCheckedMoviesValue = localStorage.getItem('isCheckedMovies');
        if (isCheckedMoviesValue) {
            setIsCheckedMovies(JSON.parse(isCheckedMoviesValue));
        }

        const searchInputMoviesValue = localStorage.getItem('searchInputMovies');
        if (searchInputMoviesValue) {
            setSearchInputMovies(JSON.parse(searchInputMoviesValue));
        }

        const filteredMoviesValue = localStorage.getItem('filteredAllMovies');
        if (filteredMoviesValue) {
            setFilteredMovies(JSON.parse(filteredMoviesValue));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('isCheckedMovies', JSON.stringify(isCheckedMovies));
        localStorage.setItem('searchInputMovies', JSON.stringify(searchInputMovies));
    }, [isCheckedMovies, searchInputMovies]);

    useEffect(() => {
        if (filteredMovies.length > 0) {
            localStorage.setItem('filteredAllMovies', JSON.stringify(filteredMovies));
        }
    }, [filteredMovies]);

    const handleSearch = (searchInputValue) => {
        setStep(0);
        if (!searchInputValue) {
            setFilteredMovies([]);
            setErrorMessage("Нужно ввести ключевое слово");
            return;
        }
        setErrorMessage('');
        const filteredMovies = props.movies.filter((movie) => {
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
        localStorage.setItem('filteredAllMovies', JSON.stringify(filteredMovies));
        setFilteredMovies(filteredMovies);
    };

    return (
        <div className='movies'>
            <SearchForm
                onSearch={handleSearch}
                isChecked={isCheckedMovies}
                setIsChecked={setIsCheckedMovies}
                searchInputValue={searchInputMovies}
                setSearchInputValue={setSearchInputMovies}
            />
            <MoviesCardList
                savedMovies={props.savedMovies}
                filteredMovies={filteredMovies}
                isChecked={isCheckedMovies}
                onLikeClick={props.onLikeClick}
                onDeleteClick={props.onDeleteClick}
                errorMessage={errorMessage}
                step={step}
                setStep={setStep}
            />
        </div>
    );
}

export default Movies;