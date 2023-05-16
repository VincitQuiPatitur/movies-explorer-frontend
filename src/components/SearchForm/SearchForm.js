import React from "react";

function SearchForm(props) {
    const handleCheckboxChange = (e) => {
        props.setIsChecked(e.target.checked);
    };

    const handleInputChange = (e) => {
        props.setSearchInputValue(e.target.value);
    };

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onSearch(props.searchInputValue);
    }

    return (
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <input
                    name="searchInput"
                    type="text"
                    className="search__form-input"
                    placeholder='Фильм'
                    value={props.searchInputValue}
                    onChange={handleInputChange}
                />
                <button className="search__form-button" type="submit"></button>
            </form>
            <div className="search__sorts">
                <label className="search__sorts-switch">
                    <input
                        className="search__sorts-input"
                        type="checkbox"
                        checked={props.isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="search__sorts-slider"></span>
                </label>
                <p className="search__sorts-text">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;