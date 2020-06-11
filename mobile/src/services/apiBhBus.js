import axios from 'axios';

const apiBhBus = axios.create({
  baseURL: 'http://api-bhbus.herokuapp.com/',
});

export default apiBhBus;