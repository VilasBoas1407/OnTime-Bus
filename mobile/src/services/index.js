import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.104:8888',
});

export default api;