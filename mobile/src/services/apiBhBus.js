import axios from 'axios';

const apiBhBus = axios.create({
  baseURL: 'https://api-bhbus.herokuapp.com/',
});

export default apiBhBus;