import { createStore } from 'vuex';

import state from './state';
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

import product from './modules/product';
import cart from './modules/cart';
import auth from './modules/auth';

export default createStore({
    state,
    getters,
    mutations,
    actions,
    modules: {
        product,
        cart,
        auth,
    }
})