import React, {useContext, useEffect } from "react";
import {CurrentUserContext} from "../../contexts/CurrentUserContext";
import {useFormValidation} from "../../hooks/useFormValidation";
import Preloader from "../Preloader/Preloader";

function Profile(props) {
    const {handleChange, value, errors, isValueValid, resetForm} = useFormValidation();
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        if (currentUser) resetForm(currentUser, {}, true);

    }, [currentUser, resetForm]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!value.name || !value.email) return;
        props.onUserUpdate({
            name: value.name,
            email: value.email
        });
    }

    return (
        <>
            <form className="profile" onSubmit={handleSubmit}>
                <h1 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h1>
                <fieldset className="profile__form">
                    <label className="profile__form-label">
                        <span className="profile__form-text">Имя</span>
                        <input
                            name="name"
                            placeholder="Имя"
                            value={value.name || ''}
                            onChange={handleChange}
                            minLength={2}
                            maxLength={30}
                            required
                            type="text"
                            className="profile__form-input"
                        />
                        <span className="profile__form-error">{errors.name}</span>
                    </label>
                    <label className="profile__form-label">
                        <span className="profile__form-text">E-mail</span>
                        <input
                            name="email"
                            placeholder="E-mail"
                            value={value.email || ''}
                            onChange={handleChange}
                            required
                            type="email"
                            className="profile__form-input"/>
                        <span className="profile__form-error">{errors.email}</span>
                    </label>
                </fieldset>
                <button type="submit"
                        className={`profile__update-button ${!isValueValid && 'profile__update-button_inactive'}`}>Редактировать
                </button>
                <a href="/" className="profile__signout-button" onClick={props.onLogout}>Выйти из аккаунта</a>
            </form>
            {props.isLoading && <Preloader/>}
        </>
    );
}

export default Profile;