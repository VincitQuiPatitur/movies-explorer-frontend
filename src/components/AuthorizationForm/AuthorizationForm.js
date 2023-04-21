import {Link, useLocation} from "react-router-dom";

function AuthorizationForm(props) {
    const location = useLocation();
    return (
        <form className="authorization__form">
            <h2 className="authorization__form-title">{props.title}</h2>
            <fieldset className="authorization__form-fieldset">
                {location.pathname === '/signup' &&
                    <label className="authorization__form-label">
                        <span className="authorization__form-text">Имя</span>
                        <input
                            type="text" className="authorization__form-input"/>
                        <span className="authorization__form-error"></span>
                    </label>
                }
                <label className="authorization__form-label">
                    <span className="authorization__form-text">E-mail</span>
                    <input type="email" className="authorization__form-input"/>
                    <span className="authorization__form-error"></span>
                </label>
                <label className="authorization__form-label">
                    <span className="authorization__form-text">Пароль</span>
                    <input type="password" className="authorization__form-input"/>
                    <span className="authorization__form-error">Что-то пошло не так...</span>
                </label>
            </fieldset>
            <button type="submit" className="authorization__form-button">{props.buttonText}</button>
            <p className="authorization__link">{props.text} <Link className="authorization__link-text" to={props.link}>{props.linkText}</Link></p>
        </form>
    );
}

export default AuthorizationForm;