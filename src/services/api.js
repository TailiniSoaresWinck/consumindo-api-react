import axios from 'axios';

const api = axios.create({
    baseURL:'https://api-fake-blog.herokuapp.com/postagens'
});

export default api;