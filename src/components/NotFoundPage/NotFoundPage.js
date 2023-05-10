import { Link, useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    function handleLinkClick(e) {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <section className="not-found-page">
            <div className="not-found-page__block">
                <h2 className="not-found-page__error">404</h2>
                <p className="not-found-page__description">Страница не найдена</p>
            </div>
            <Link to="" onClick={handleLinkClick} className="not-found-page__back">Назад</Link>
        </section>
    );
}

export default NotFoundPage;