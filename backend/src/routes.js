const { Router } = require('express');
const UserController = require('./controllers/UserController');
const BusController = require('./controllers/BusController');

const routes = Router();

routes.post('/user',UserController.insertUser);
routes.get('/user',UserController.loginUser);

routes.get('/user/recover',UserController.recoverPass);

routes.get('/bus/GetPoints',BusController.GetPontos);
module.exports = routes;