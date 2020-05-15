const options = require('./knew-options');
const knex = require('knex')(options);

var Usuario = {

    async insertUser(user){
        try{
            
            await knex('tb_usuario').insert(user).then(() => console.log("data inserted"))
            .catch((err) => { console.log(err); throw err }); 
        }
        catch(ex){
            return ex;
        }
    },

    async validarEmail(email){
        var valid = false;
        try{

            await knex('tb_usuario').select()
            .where('DS_EMAIL',email).then(function(res){
                console.log(res)
                if(res.length >= 1){
                    valid = false;
                }
                else{
                    valid = true;
                }
            });
            return valid;

        }
        catch(ex){
            console.log(ex);
            throw ex;
        }
    },

    async loginUser(email,senha){
        try{
            var user = {};

            await knex('tb_usuario')
            .select()
            .where({
                DS_EMAIL: email,
                DS_SENHA: senha
            })
            .then(function(res){
                if(res.length >= 1)
                    user = res;
                else
                    user = null;
            });
            
            return user;
        }
        catch(ex){
            throw ex;
        }
    },
}

module.exports = Usuario;