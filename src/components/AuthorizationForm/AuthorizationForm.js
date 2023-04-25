import {Link, useLocation} from "react-router-dom";

function AuthorizationForm(props) {
    const location = useLocation();
    return (
        <>
            <h2 className="authorization__title">{props.title}</h2>
            <form className="authorization__form">
                <fieldset className="authorization__form-fieldset">
                    {location.pathname === '/signup' &&
                        <label className="authorization__form-label">
                            <span className="authorization__form-text">Имя</span>
                            <input type="text" required className="authorization__form-input"/>
                            <span className="authorization__form-error"></span>
                        </label>
                    }
                    <label className="authorization__form-label">
                        <span className="authorization__form-text">E-mail</span>
                        <input type="email" required className="authorization__form-input"/>
                        <span className="authorization__form-error"></span>
                    </label>
                    <label className="authorization__form-label">
                        <span className="authorization__form-text">Пароль</span>
                        <input type="password" required className="authorization__form-input"/>
                        <span className="authorization__form-error">Что-то пошло не так...</span>
                    </label>
                </fieldset>
                <button type="submit" className="authorization__form-button">{props.buttonText}</button>
            </form>
            <p className="authorization__link">{props.text} <Link className="authorization__link-text"
                                                                  to={props.link}>{props.linkText}</Link></p>
        </>
    );
}

export default AuthorizationForm;