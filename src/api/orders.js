import base from './helpers/base'
import request from "./helpers/request";

const getOrders = () => {
    return window.fetch(base + '/orders', request.get())
        .then(resp => resp.json())
}

const getOrder = () => {
    return window.fetch(base + '/orders/order', request.get())
        .then(resp => resp.json())
}

const updateOrder = (newOrder) => {
    return window.fetch(base + '/orders/order', request.put({
        order: newOrder
    }))
        .then(resp => resp.json())
}

export default {
    getOrders,
    getOrder,
    updateOrder
}