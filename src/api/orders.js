import base from './helpers/base'
import request from "./helpers/request";

const getOrders = () => {
    return window.fetch(base + '/orders', request.get())
        .then(resp => resp.json())
}

const getOrder = (customer) => {
    return window.fetch(base + '/orders/' + customer, request.get())
        .then(resp => resp.json())
}

export default {
    getOrders,
    getOrder
}