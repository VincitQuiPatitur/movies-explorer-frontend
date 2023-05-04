import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
// import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import * as auth from '../../utils/auth.js';
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [popupMessage, setPopupMessage] = useState({
        isInfoTooltipOpen: false,
        isSuccess: true,
        message: ''
    });
    const [isLoading, setLoading] = useState(false);
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

   /* useEffect(() => {
        moviesApi.getInitialMovies()
            .then(movies => {
                localStorage.setItem('movies', JSON.stringify(movies))
            })
            .catch(error => console.log(error));
    }, []);*/
//
    useEffect(() => {
        if (isLoggedIn) {
            mainApi.getUserInfo()
                .then(userData => {
                    setCurrentUser(userData);
                })
                .catch(error => console.log(error));
        }
    }, [isLoggedIn]);

    function handleRegister({name, email, password}) {
        setLoading(true);
        return auth.register(name, email, password)
            .then(() => {
                setPopupMessage({
                    isInfoTooltipOpen: true,
                    isSuccess: true,
                    message: "Вы успешно зарегистрированы!"
                })
                return handleLogin({email, password});
            })
            .catch(error => {
                setPopupMessage({
                    isInfoTooltipOpen: true,
                    isSuccess: false,
                    message: error === "Ошибка: 409"
                        ? "Пользователь с такой почтой уже зарегистрирован"
                        : error === 'Ошибка: 400'
                            ? "Одно или несколько полей формы неверно заполнены"
                            : "Ой-ой! Что-то пошло не так! Попробуйте ещё раз"
                });
                console.log(`Ошибка в процессе регистрации пользователя на сайте: ${error}`);
            })
            .finally(() => setLoading(false));
    }

    function handleLogin({ email, password }) {
        setLoading(true);
        return auth
            .login(email, password)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("jwt", data.token);
                    setLoggedIn(true);
                    setPopupMessage({
                        isInfoTooltipOpen: true,
                        isSuccess: true,
                        message: "Вы успешно авторизировались"
                    })
                    navigate("/movies");
                }
            })
            .catch((err) => {
                setPopupMessage({
                    isInfoTooltipOpen: true,
                    isSuccess: false,
                    message: "Неверный логин или пароль"
                })
                console.log(`Ошибка в процессе авторизации пользователя на сайте: ${err}`);
            })
            .finally(() => setLoading(false));
    }


    function handleLogout() {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
    }

    function handleUpdateUserInfo(userInfo) {
        setLoading(true);
        mainApi.changeUserInfo(userInfo)
            .then(result => {
                setPopupMessage({
                    isInfoTooltipOpen: true,
                    isSuccess: true,
                    message: "Ваши данные успешно изменены"
                });
                setCurrentUser(result);
            })
            .catch(error => {
                setPopupMessage({
                    isInfoTooltipOpen: true,
                    isSuccess: false,
                    message: error === "Error: 400 Bad Request"
                        ? "Неверный формат почты"
                        : error === "Error: 409 Conflict"
                            ? "Пользователь с такой почтой уже зарегистрирован"
                            : "Что-то пошло не так, попробуйте ещё раз"
                })
                console.log(error);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const token = localStorage.getItem("jwt");
        if (token) {
            setLoggedIn(true);
            setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
        }
    }, []);


    function toggleBurgerMenuClick() {
        setBurgerMenuOpen(!isBurgerMenuOpen);
    }

    function closeElement() {
        setBurgerMenuOpen(false);
        setPopupMessage({...popupMessage, isInfoTooltipOpen: false});
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="app">
                <Header
                    onClick={toggleBurgerMenuClick}
                    isActive={isBurgerMenuOpen}
                    onClose={closeElement}
                    isLoggedIn={isLoggedIn}
                />
                <Routes>
                    <Route
                        path='/'
                        element={<Main
                            isLoggedIn={isLoggedIn}
                        />}
                    />
                    <Route
                        path='/movies'
                        element={<ProtectedRoute
                            component={Movies}
                            isLoggedIn={isLoggedIn}
                            isLoading={isLoading}
                        />}/>
                    <Route
                        path='/saved-movies'
                        element={<ProtectedRoute
                            component={SavedMovies}
                            isLoggedIn={isLoggedIn}
                            isLoading={isLoading}
                        />}/>
                    <Route
                        path='/profile'
                        element={<ProtectedRoute
                            component={Profile}
                            isLoggedIn={isLoggedIn}
                            onUserUpdate={handleUpdateUserInfo}
                            onLogout={handleLogout}
                            isLoading={isLoading}
                        />}/>
                    <Route
                        path='/signin'
                        element={<Login
                            onClose={closeElement}
                            onLogin={handleLogin}
                        />}/>
                    <Route
                        path='/signup'
                        element={<Register
                            onClose={closeElement}
                            onRegister={handleRegister}
                        />}/>
                    <Route
                        path='/*'
                        element={<NotFoundPage/>}/>
                </Routes>
                <Footer/>
            </div>

            <InfoTooltip
                isOpen={popupMessage.isInfoTooltipOpen}
                isSuccess={popupMessage.isSuccess}
                message={popupMessage.message}
                onClose={closeElement}
            />
        </CurrentUserContext.Provider>
    );
}

export default App;