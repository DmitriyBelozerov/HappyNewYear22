const apiOptions = {
    baseUrl: "http://localhost:3001/items",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },

}

class Api {
    constructor(config) {
        this._header = config.headers;
        this._baseUrl = config.baseUrl;
    }

    _getJsonOrError(res) {
        if (res.ok) {
            return res.json();
        }
        throw new Error(`Ошибочка при загрузке данных с сервера`)
    }

    getItems() {
        return fetch(this._baseUrl, {
            credentials: 'include',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }

    createItem(valueProduct, valuePrice, lastName) {
        return fetch(this._baseUrl, {
            method: 'POST',
            credentials: 'include',
            headers: this._header,
            body: JSON.stringify({
                valueProduct,
                valuePrice,
                lastName
            }),
        })
            .then(this._getJsonOrError)
    }

    deleteItem(id) {
        return fetch(`${this._baseUrl}/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this._header,
        })
            .then(this._getJsonOrError)
    }
}


const api = new Api(apiOptions);

export default api;