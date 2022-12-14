import api from './api';

export default {
    all() {
        return api.get('api/product');
    },
    show(id) {
        return api.get(`products/${id}`);
    }
}