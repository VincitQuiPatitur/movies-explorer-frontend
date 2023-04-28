import React, {useState, useCallback} from "react";

export function useFormValidation() {
    const [value, setValue] = useState({});
    const [errors, setErrors] = useState({});
    const [isValueValid, setValueValid] = useState(false);

    function handleChange(e) {
        const {name, value} = e.target;

        setValue((prevValue) => ({...prevValue, [name]: value}));
        setErrors({...errors, [name]: e.target.validationMessage});
        setValueValid(e.target.closest('form').checkValidity());
    }

    // Очистка формы
    /*const resetForm = useCallback(function (newValue = {}, newErrors = {}, newValueValid = false) {
            setValue(newValue);
            setErrors(newErrors);
            setValueValid(newValueValid);
        }, [setValue, setErrors, setValueValid]
    );*/

    return {handleChange, value, setValue, errors, setErrors, isValueValid, setValueValid}
}