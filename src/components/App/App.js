import {Routes, Route} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import React, {useState} from "react";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

function App() {
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

    function toggleBurgerMenuClick() {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    }

    return (
        <div className="app">
            <Header
                onClick={toggleBurgerMenuClick}
                isActive={isBurgerMenuOpen}
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
                    element={<Login/>}/>
                <Route
                    path='/signup'
                    element={<Register/>}/>
                <Route
                    path='/*'
                    element={<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;