var axios = require('axios');

const apiBhBus = axios.create({
  baseURL: 'http://api-bhbus.herokuapp.com/',
});

module.exports = apiBhBus;