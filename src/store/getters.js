export const cartItemCount = (state) => {
    return state?.cart?.length;
}

export const getCartCount = (state) => {
    let newState = state.cart.reduce((prev, curr) => prev + curr.product.price * curr.quantity, 0);
    return newState.toFixed(2);
}