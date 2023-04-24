import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Logo from "../Logo/Logo";

function Register() {
    return (
        <div className="login">
            <Logo/>
            <AuthorizationForm
                title={'Добро пожаловать!'}
                buttonText={'Зарегистрироваться'}
                text={'Уже зарегистрированы?'}
                link={"/signin"}
                linkText={"Войти"}
            />
        </div>
    );
}

export default Register;