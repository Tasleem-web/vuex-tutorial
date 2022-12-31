
import axios from 'axios';

const token = localStorage.getItem('accessToken');
const api = axios.create({
    // baseURL: 'https://fakestoreapi.com/'
    // baseURL: 'https://dummyjson.com/'
    baseURL: 'http://localhost:5000/',
    headers: {
        Authorization: `${token}`
    }
})

export default api;