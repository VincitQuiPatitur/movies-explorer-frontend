import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Logo from "../Logo/Logo";

function Login() {
    return (
        <div className="login">
            <Logo/>
            <AuthorizationForm
                title={'Рады видеть!'}
                buttonText={'Войти'}
                text={'Ещё не зарегистрированы?'}
                link={"/signup"}
                linkText={"Регистрация"}
            />
        </div>
    );
}

export default Login;