class MainApi {
    constructor({baseUrl, movieUrl}) {
        this._baseUrl = baseUrl;
        this._movieUrl = movieUrl;
    }

    _getResult(result) {
        return result.ok ? result.json() : Promise.reject(`Error: ${result.status} ${result.statusText}`);
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResult);
    }

    addMovieToFavorite(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `${this._movieUrl}${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `${this._movieUrl}${movie.image.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
            })
        })
            .then(this._getResult);
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResult);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._getResult);
    }

    changeUserInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        })
            .then(this._getResult);
    }
}

const mainApi = new MainApi({
    /*baseUrl: 'https://api.movies.kostrova.nomoredomains.monster',*/
    baseUrl: 'http://localhost:3001',
    movieUrl: 'https://api.nomoreparties.co/beatfilm-movies'
})

export default mainApi;