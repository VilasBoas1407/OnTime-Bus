var userModel = require('../models/User');
var UtilController = require('./UtilController');
var sha1 = require('sha1');
var moment = require('moment');

var UserController = {

    async insertUser(req,res){

        try{
            let { user } = req.body;
            var data = {};
            user.DT_CADASTRO = moment().format('YYYY/MM/DD, hh:mm:ss')
            
            var validarEmail = await userModel.validarEmail(user.DS_EMAIL);
            var validarData =  await UtilController.ValidarDados(user);
            if(validarEmail){
                if(validarData == "OK"){
                    delete user.DS_SENHA_CONF;
                    user.DS_SENHA = sha1(user.DS_SENHA);
                    userModel.insertUser(user);
                    data.status = 200;
                    data.msg = "Usuário cadastrado com sucesso!";
                    return res.json({data});
                }
                else{
                    data.status = 201;
                    data.msg = validarData;
                    return res.json({data});
                }
            }
            else{
                data.status = 201;
                data.msg = "E-mail já cadastrado no sistema!";
                return res.json({data});
            }
                
        }
        catch(ex){
            data.status = 400;
            data.msg = ex;
            return res.json({data});
        }

    },

    async loginUser(req,res){
        
        try{
            var { DS_EMAIL,DS_SENHA } = req.query;
            console.log(DS_EMAIL);
            if(DS_EMAIL != '' || DS_EMAIL != undefined || DS_EMAIL == null){

                var data = {}
                DS_SENHA = sha1(DS_SENHA);
                var userData = await userModel.loginUser(DS_EMAIL,DS_SENHA);
                if(userData){
                    data.status = 202;
                    data.valid = true;
                    data.msg = "Usuário autenticado!";
                    data.userData = userData;
                    return res.json(data);
                }
                else{
                    data.status = 405;
                    data.valid = false;
                    data.msg = "E-mail e/ou senha inválidos!"
                    return res.json(data);
                }
            }
            else{
                data.status = 202;
                data.valid = false;
                data.msg = "Favor preencher campos de usuário e senha!";
                return res.json(data);
            }

        }
        catch(err){
            data.status = 500;
            data.valid = false;
            data.msg = "Error:" + err;
            return res.json({data});
        }

    },

    async recoverPass(req,res){
        const { email } = req.body;
        console.log(email);
        
    },
}

module.exports = UserController;