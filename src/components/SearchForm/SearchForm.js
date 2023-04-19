import React from "react";

function SearchForm() {
    return (
        <section className="search">
            <form action="" className="search__form">
                <input type="text" className="search__form-input" placeholder='Фильм'/>
                <button className="search__form-button" type="submit"></button>
            </form>
            <div className="search__sorts">
                <label className="search__sorts-switch">
                    <input className="search__sorts-input" type="checkbox"/>
                    <span className="search__sorts-slider"></span>
                </label>
                <p className="search__sorts-text">Короткометражки</p>
            </div>
        </section>
    );
}

export default SearchForm;