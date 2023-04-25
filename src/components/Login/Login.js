import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Logo from "../Logo/Logo";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Login(props) {
    return (
        <>
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
            <InfoTooltip
                isOpen={props.isOpen}
                onClose={props.onClose}
            />
        </>
    );
}

export default Login;