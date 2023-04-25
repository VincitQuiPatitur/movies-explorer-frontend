import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Logo from "../Logo/Logo";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Register(props) {
    return (
        <>
            <div className="authorization">
                <Logo/>
                <AuthorizationForm
                    title={'Добро пожаловать!'}
                    buttonText={'Зарегистрироваться'}
                    text={'Уже зарегистрированы?'}
                    link={"/signin"}
                    linkText={"Войти"}
                />
            </div>
            <InfoTooltip
                isOpen={props.isOpen}
                onClose={props.onClose}
            />
        </>
    );
}

export default Register;