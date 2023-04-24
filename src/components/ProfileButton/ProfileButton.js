import {Link} from "react-router-dom";
import profileAvatar from "../../images/profile-avatar.svg";
import React from "react";

function ProfileButton() {
    return (
        <div className="profile-button">
            <Link className="profile-button__link" to='/profile'>Аккаунт</Link>
            <div className="profile-button__logo-block">
                <img src={profileAvatar} alt="Иконка в виде символа человека"
                     className="profile-button__profile-logo"/>
            </div>
        </div>
    );
}

export default ProfileButton;