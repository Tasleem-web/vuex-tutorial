
export const addToCart = ({ commit }, { product, quantity }) => {
    commit("ADD_TO_CART", { product, quantity });
}


export const removeAllItemFromCart = ({ commit }) => {
    commit('REMOVE_ALL_ITEMS_FROM_CART')
}