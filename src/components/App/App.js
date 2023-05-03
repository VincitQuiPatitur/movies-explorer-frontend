import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate, useLocation} from "react-router-dom";
import moviesApi from "../../utils/MoviesApi";
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

function App() {
    const [currentUser, setCurrentUser] = useState({});
    const [isRegisterOk, setRegisterOk] = useState(false);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
    const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);

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
                    console.log(userData);
                    setCurrentUser(userData);
                })
                .catch(error => console.log(error));
        }
    }, [isLoggedIn]);

    function handleRegister({name, email, password}) {
        return auth.register(name, email, password)
            .then(() => {
                setRegisterOk(true);
                setInfoTooltipOpen(true);
                return handleLogin({email, password});
            })
            .catch(err => {
                console.log(`Ошибка в процессе регистрации пользователя на сайте: ${err}`);
                setInfoTooltipOpen(true);
            });
    }

    function handleLogin({ email, password }) {
        return auth
            .login(email, password)
            .then((data) => {
                if (data.token) {
                    localStorage.setItem("jwt", data.token);
                    setLoggedIn(true);
                    setCurrentUser(data.user);
                    setInfoTooltipOpen(true);
                    navigate("/movies");
                }
            })
            .catch((err) => {
                setInfoTooltipOpen(true);
                console.log(`Ошибка в процессе авторизации пользователя на сайте: ${err}`);
            });
    }


    function handleLogout() {
        localStorage.removeItem('jwt');
        setLoggedIn(false);
    }

    function handleUpdateUser(userInfo) {
        mainApi.changeUserInfo(userInfo)
            .then(result => {
                console.log('update');
                console.log(result);
                setCurrentUser(result);
            })
            .catch(error => console.log(error))
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
        setInfoTooltipOpen(false);
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
                        />}/>
                    <Route
                        path='/saved-movies'
                        element={<ProtectedRoute
                            component={SavedMovies}
                            isLoggedIn={isLoggedIn}
                        />}/>
                    <Route
                        path='/profile'
                        element={<ProtectedRoute
                            component={Profile}
                            isLoggedIn={isLoggedIn}
                            onUserUpdate={handleUpdateUser}
                            onLogout={handleLogout}
                        />}/>
                    <Route
                        path='/signin'
                        element={<Login
                            isOpen={isInfoTooltipOpen}
                            onClose={closeElement}
                            onLogin={handleLogin}
                        />}/>
                    <Route
                        path='/signup'
                        element={<Register
                            isOpen={isInfoTooltipOpen}
                            onClose={closeElement}
                            isRegisterOk={isRegisterOk}
                            onRegister={handleRegister}
                        />}/>
                    <Route
                        path='/*'
                        element={<NotFoundPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;