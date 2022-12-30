import api from './api';

export default {
    all() {
        return api.get('api/products');
    },
    show(id) {
        return api.get(`products/${id}`);
    }
}