
import Product from '../API/product';

export const getProducts = ({ commit }) => {
    Product.all().then(resp => {
        commit('SET_PRODUCTS', resp.data)
    })
}


export const getProduct = ({ commit }, id) => {
    Product.show(id).then(resp => {
        commit('SET_PRODUCT', resp.data)
    })
}

export const removeProduct = ({ commit }, product) => {
    commit('REMOVE_PRODUCT', product)
}


export const addToCart = ({ commit }, { product, quantity }) => {
    commit("ADD_TO_CART", { product, quantity });
}


export const removeAllItemFromCart = ({ commit }) => {
    commit('REMOVE_ALL_ITEMS_FROM_CART')
}