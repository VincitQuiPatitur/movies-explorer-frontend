import {Routes, Route} from "react-router-dom";
import AboutProject from "../AboutProject/AboutProject";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import React from "react";
import Register from "../Register/Register";

function App() {
    return (
        <div className="app">
            <div className="app__content">
                <Routes>
                    <Route
                        path='/'
                        element={<AboutProject/>}
                    />
                    <Route
                        path='/movies'
                        element={<Movies/>}/>
                    <Route
                        path='/saved-movies'
                        element={<SavedMovies />}/>
                    <Route
                        path='/profile'
                        element={<Profile />}/>
                    <Route
                        path='/signin'
                        element={<Login />}/>
                    <Route
                        path='/signup'
                        element={<Register />}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;