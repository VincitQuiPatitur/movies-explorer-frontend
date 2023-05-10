import { MOVIES_URL } from "./constants";

class MoviesApi {
    constructor({baseUrl, headers}) {
        this._url = baseUrl;
        this._headers = headers;
    }

    _getResult(result) {
        return result.ok ? result.json() : Promise.reject(`Error: ${result.status} ${result.statusText}`);
    }

    getAllMovies() {
        return fetch(
            `${this._url}`,
            {
                method: 'GET',
                headers: this._headers
            })
            .then(this._getResult);
    }
}

const moviesApi = new MoviesApi({
    baseUrl: MOVIES_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default moviesApi;