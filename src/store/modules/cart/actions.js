
export const addToCart = ({ commit, dispatch }, { product, quantity }) => {
    dispatch('addNotifications', {
        type: 'success',
        message: "Product added into cart"

    }, { root: true });

    commit("ADD_TO_CART", { product, quantity });
}


export const removeAllItemFromCart = ({ commit, dispatch }) => {
    dispatch('addNotifications', {
        type: 'danger',
        message: "Removed all product from cart"

    }, { root: true });
    commit('REMOVE_ALL_ITEMS_FROM_CART')
}

export const removeProduct = ({ commit, dispatch }, product) => {
    dispatch('addNotifications', {
        type: 'danger',
        message: "Product removed from cart"

    }, { root: true });
    commit('REMOVE_PRODUCT', product)
}