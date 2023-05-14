import {useState, useCallback} from "react";
import {EMAIL__REGEX, NAME__REGEX} from "../utils/constants";

export function useFormValidation() {
    const [value, setValue] = useState({});
    const [errors, setErrors] = useState({});
    const [isValueValid, setValueValid] = useState(false);

    function handleChange(e) {
        const {name, value} = e.target;

        setValue((prevValue) => ({...prevValue, [name]: value}));
        setErrors((prevErrors) => ({...prevErrors, [name]: validateField(name, value)}));
        setValueValid(e.target.closest('form').checkValidity());
    }

    function validateField(name, value) {
        if (name === "name") {
            const usernameRegex = NAME__REGEX;
            if (!usernameRegex.test(value)) {
                return "Имя пользователя должно содержать от 2 до 30 символов";
            }
        } else if (name === "email") {
            const emailRegex = EMAIL__REGEX;
            if (!emailRegex.test(value)) {
                return "Некорректный адрес электронной почты";
            }
        } else if (name === "password") {
            if (value.length < 2) {
                return "Пароль должен содержать не менее 2 символов";
            }
        }
        return "";
    }

    // Очистка формы
    const resetForm = useCallback(function (newValue = {}, newErrors = {}, newValueValid = false) {
            setValue(newValue);
            setErrors(newErrors);
            setValueValid(newValueValid);
        }, [setValue, setErrors, setValueValid]
    );

    return {handleChange, value, setValue, errors, setErrors, isValueValid, setValueValid, resetForm}
}