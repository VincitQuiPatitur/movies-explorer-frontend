import React from "react";
import AuthorizationForm from "../AuthorizationForm/AuthorizationForm";
import Logo from "../Logo/Logo";
import {useFormValidation} from "../../hooks/useFormValidation";

function Register(props) {
    const { handleChange, value, errors, isValueValid} = useFormValidation();

    function handleSubmit(e) {
        e.preventDefault();
        if (!value.name || !value.email || !value.password) return;
        props.onRegister({
            name: value.name,
            email: value.email,
            password: value.password
        });
    }

    return (
        <>
            <div className="authorization">
                <Logo/>
                <AuthorizationForm
                    title={'Добро пожаловать!'}
                    buttonText={'Зарегистрироваться'}
                    text={'Уже зарегистрированы?'}
                    link={'/signin'}
                    linkText={'Войти'}
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    value={value}
                    errors={errors}
                    isValueValid={isValueValid}
                />
            </div>
        </>
    );
}

export default Register;