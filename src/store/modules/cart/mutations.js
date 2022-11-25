export const ADD_TO_CART = (state, { product, quantity }) => {
    let productInCart = state.cart.find(item => item.product.id === product.id);
    if (productInCart) {
        productInCart.quantity += quantity;
        return;
    }

    state.cart.push({ product, quantity })
}

export const REMOVE_ALL_ITEMS_FROM_CART = (state) => {
    state.cart = [];
}

export const REMOVE_PRODUCT = (state, product) => {
    state.cart = state.cart.filter(item => item.product.id !== product.id);
}