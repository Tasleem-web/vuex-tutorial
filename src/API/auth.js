import api from './api';

export default {
    login(payload) {
        return api.post(`vendor/login`, payload);
    },
    show(id) {
        return api.get(`products/${id}`);
    }
}