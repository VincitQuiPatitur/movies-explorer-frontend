class MoviesApi {
    constructor({baseUrl, headers}) {
        this._url = baseUrl;
        this._headers = headers;
    }

    _getResult(result) {
        return result.ok ? result.json() : Promise.reject(`Error: ${result.status} ${result.statusText}`);
    }

    getInitialMovies() {
        return fetch(
            `${this._url}`,
            {
                headers: this._headers
            })
            .then(this._getResult);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default moviesApi;