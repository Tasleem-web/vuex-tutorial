import api from './api';

export default {
    all() {
        return api.get('products');
    },
    show(id) {
        return api.get(`products/${id}`);
    }
}