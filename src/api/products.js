import base from "./helpers/base";
import request from "./helpers/request";

const getProducts = () => {
    return window.fetch(base + '/products', request.get())
        .then(resp => resp.json())
}

const updateProduct = (item) => {
    return window.fetch(base + '/products/' + item.id, request.put({
        product: item
    }))
        .then(resp => resp.json())
}

const createProduct = (item) => {
    return window.fetch(base + '/products', request.post({
        product: item
    }))
        .then(resp => resp.json())
}

export default {
    getProducts,
    updateProduct,
    createProduct
}