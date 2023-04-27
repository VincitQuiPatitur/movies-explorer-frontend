import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import moviesApi from "../../utils/MoviesApi.js.";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(true);

    React.useEffect(() => {
       moviesApi.getInitialMovies()
           .then(movies => {
               localStorage.setItem('movies', JSON.stringify(movies))
           })
           .catch(error => console.log(error));
    }, []);

    function toggleBurgerMenuClick() {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    }

    function closeElement() {
        setBurgerMenuOpen(false);
        setInfoTooltipOpen(false);
    }

    return (
        <div className="app">
            <Header
                onClick={toggleBurgerMenuClick}
                isActive={isBurgerMenuOpen}
                onClose={closeElement}
            />
            <Routes>
                <Route
                    path='/'
                    element={<Main/>}
                />
                <Route
                    path='/movies'
                    element={<Movies/>}/>
                <Route
                    path='/saved-movies'
                    element={<SavedMovies/>}/>
                <Route
                    path='/profile'
                    element={<Profile/>}/>
                <Route
                    path='/signin'
                    element={<Login
                        isOpen={isInfoTooltipOpen}
                        onClose={closeElement}
                    />}/>
                <Route
                    path='/signup'
                    element={<Register
                        isOpen={isInfoTooltipOpen}
                        onClose={closeElement}
                    />}/>
                <Route
                    path='/*'
                    element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;