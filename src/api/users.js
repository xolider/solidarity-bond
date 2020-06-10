import base from './helpers/base'
import request from "./helpers/request";

const postLogin = (mail, password) => {
    return window.fetch(base + '/users/login', request.post({
        mail: mail,
        password: password
    })).then(res => res.json())
}

const getProfile = () => {
    return window.fetch(base + '/users/me', request.get())
        .then(resp => resp.json())
}

export default {
    postLogin,
    getProfile
}