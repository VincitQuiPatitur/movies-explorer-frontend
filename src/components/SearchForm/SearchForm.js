import React from "react";

function SearchForm(props) {
    /*function handleShortFilmCheckboxChange(evt) {
        props.onShortFilmCheckboxChange(evt.target.checked);
    }*/

    function handleSubmit(evt) {
        evt.preventDefault();
        const searchInputValue = evt.target.searchInput.value;
        props.onSearch(searchInputValue, props.isShortFilmChecked);
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <input
                    name="searchInput"
                    type="text"
                    className="search__form-input"
                    placeholder='Фильм'
                />
                <button className="search__form-button" type="submit"></button>
            </form>
            <div className="search__sorts">
                <label className="search__sorts-switch">
                    <input
                        className="search__sorts-input"
                        type="checkbox"
                        //checked={props.isShortFilmChecked}
                        //onChange={handleShortFilmCheckboxChange}
                    />
                    <span className="search__sorts-slider"></span>
                </label>
                <p className="search__sorts-text">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;