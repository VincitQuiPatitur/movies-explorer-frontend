import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Logo from "../Logo/Logo";
import {useFormValidation} from "../../hooks/useFormValidation";
import Preloader from "../Preloader/Preloader";

function Login(props) {
    const { handleChange, value, errors, isValueValid} = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        if (!value.email || !value.password) {
            return;
        }
        props.onLogin({
            email: value.email,
            password: value.password
        });
    }

    return (
        <>
            <div className="authorization">
                <Logo/>
                <AuthorizationForm
                    title={'Рады видеть!'}
                    buttonText={'Войти'}
                    text={'Ещё не зарегистрированы?'}
                    link={"/signup"}
                    linkText={"Регистрация"}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    value={value}
                    errors={errors}
                    isValueValid={isValueValid}
                    isLoading={props.isLoading}
                />
            </div>
            {props.isLoading && <Preloader/>}
        </>
    );
}

export default Login;