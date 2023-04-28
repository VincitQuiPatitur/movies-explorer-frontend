import {Link, useLocation} from "react-router-dom";
import {useFormValidation} from "../../hooks/useFormValidation";

function AuthorizationForm(props) {
    const {name, email, password} = props.value;
    const location = useLocation();
    return (
        <>
            <h2 className="authorization__title">{props.title}</h2>
            <form onSubmit={props.onSubmit} className="authorization__form" noValidate>
                <fieldset className="authorization__form-fieldset">
                    {location.pathname === '/signup' &&
                        <label className="authorization__form-label">
                            <span className="authorization__form-text">Имя</span>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                minLength={2}
                                maxLength={30}
                                required
                                value={name || ''}
                                onChange={props.onChange}
                                className="authorization__form-input"
                            />
                            <span className="authorization__form-error">{props.errors.name}</span>
                        </label>
                    }
                    <label className="authorization__form-label">
                        <span className="authorization__form-text">E-mail</span>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={email || ''}
                            className="authorization__form-input"
                            onChange={props.onChange}
                        />
                        <span className="authorization__form-error">{props.errors.email}</span>
                    </label>
                    <label className="authorization__form-label">
                        <span className="authorization__form-text">Пароль</span>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            value={password || ''}
                            onChange={props.onChange}
                            autoComplete="on"
                            className="authorization__form-input"/>
                        <span className="authorization__form-error">{props.errors.password}</span>
                    </label>
                </fieldset>
                <button type="submit" className={`authorization__form-button ${!props.isValueValid && 'authorization__form-button_inactive'}`}>{props.buttonText}</button>
            </form>
            <p className="authorization__link">{props.text} <Link className="authorization__link-text"
                                                                  to={props.link}>{props.linkText}</Link></p>
        </>
    );
}

export default AuthorizationForm;