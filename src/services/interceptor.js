import axios from 'axios';

const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: process.env.VUE_APP_URL_API,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

instance.interceptors.response.use(function (response) {
    console.log(response);
    // Any status code within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    console.log(error);
    // Any status codes outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;