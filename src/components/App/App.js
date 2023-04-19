import {Routes, Route} from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import React from "react";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function App() {
    return (
        <div className="app">
            <Header/>
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
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;