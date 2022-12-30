
import axios from 'axios';

const api = axios.create({
    // baseURL: 'https://fakestoreapi.com/'
    // baseURL: 'https://dummyjson.com/'
    baseURL: 'http://localhost:5000/'
})

export default api;