import {Link} from "react-router-dom";

function NotFoundPage() {
    return (
        <section className="not-found-page">
            <div className="not-found-page__block">
                <h2 className="not-found-page__error">404</h2>
                <p className="not-found-page__description">Страница не найдена</p>
            </div>
            <Link to='/' className="not-found-page__back">Назад</Link>
        </section>
    );
}

export default NotFoundPage;