import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
    return (
        <section className="movies-section">
            <ul className="movies-section__container">
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
                <MoviesCard/>
            </ul>
            <div className="movies-section__more">
                {// добавить условие: если видео в блоке >=16, отображать кнопку, если меньше, то span
                }
                <button className="movies-section__more-button">Ещё</button>
                {/*<span className="movies-section__more-span"></span>*/}
            </div>
        </section>
    );
}

export default MoviesCardList;