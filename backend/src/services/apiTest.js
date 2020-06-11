var axios = require('axios');

const apiBhBusTest = axios.create({
  baseURL: 'http://localhost:3333/',
});

module.exports = apiBhBusTest;