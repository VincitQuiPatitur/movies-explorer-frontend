import React, {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";

function Profile(props) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('Имя');
    const [email, setEmail] = useState('');


    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        props.onUserUpdate({
            name,
            email
        });
    }

    return (
        <form className="profile" onSubmit={handleSubmit}>
            <h1 className="profile__greeting">Привет, {currentUser.name}!</h1>
            <fieldset className="profile__form">
                <label className="profile__form-label">
                    <span className="profile__form-text">Имя</span>
                    <input
                        name="name"
                        placeholder="Имя"
                        value={name || ''}
                        onChange={handleChangeName}
                        required
                        type="text"
                        className="profile__form-input"/>
                    <span className="profile__form-error"></span>
                </label>
                <label className="profile__form-label">
                    <span className="profile__form-text">E-mail</span>
                    <input
                    name="email"
                    placeholder="E-mail"
                    value={email || ''}
                    onChange={handleChangeEmail}
                    required
                    type="email"
                    className="profile__form-input"/>
                    <span className="profile__form-error"></span>
                </label>
            </fieldset>
            <button className="profile__update-button">Редактировать</button>
            <a href="/" className="profile__signout-button" onClick={props.onLogout}>Выйти из аккаунта</a>
        </form>
    );
}

export default Profile;