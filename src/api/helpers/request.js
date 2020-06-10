const request = {
    get(json = true) {
        return {
            headers: headers(json),
            method: 'GET'
        }
    },
    post(body, json = true) {
        return {
            headers: headers(json),
            method: 'POST',
            body: JSON.stringify(body)
        }
    },
    put(body, json = true) {
        return {
            headers: headers(json),
            method: 'PUT',
            body: JSON.stringify(body)
        }
    }
}

const headers = jsonInput => {
    return {
        'Authorization': localStorage.getItem('token') ? 'Bearer ' + localStorage.getItem('token') : null,
        'Content-Type': jsonInput ? 'application/json; charset=UTF-8' : 'multipart/form-data; charset=UTF-8'
    }
}

export default request