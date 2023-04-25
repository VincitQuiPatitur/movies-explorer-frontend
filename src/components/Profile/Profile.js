import React from "react";

function Profile() {
    return (
        <form className="profile">
            {/*Подтянуть имя пользователя*/}
            <h1 className="profile__greeting">Привет, польель!</h1>
            <fieldset className="profile__form">
                <label className="profile__form-label">
                    <span className="profile__form-text">Имя</span>
                    <input placeholder="Имя" type="text" className="profile__form-input"/>
                    <span className="profile__form-error"></span>
                </label>
                <label className="profile__form-label">
                    <span className="profile__form-text">E-mail</span>
                    <input placeholder="E-mail" type="email" className="profile__form-input"/>
                    {/*Пример вывода ошибки, убрать позже*/}
                    <span className="profile__form-error">Текст должен быть не короче 2 симв. Длина текста сейчас: 1 символ</span>
                </label>
            </fieldset>
            <button className="profile__update-button">Редактировать</button>
            <a href="/signin" className="profile__signout-button">Выйти из аккаунта</a>
        </form>
    );
}

export default Profile;