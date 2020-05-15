var nodemailer = require('nodemailer');

var remetente = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: '',
    port: 587,
    secure: true,
    auth:{
        user: 'n0replyontimebus@gmail.com',
        pass: 'OnTimeBus@2020' }
});

var emailASerEnviado = {
    from: 'n0replyontimebus@gmail.com',
    to: '',
    subject: 'Enviando Email com Node.js',
    text: 'Estou te enviando este email com node.js',
};

var UtilController = {

    async sendEmail(email){
        console.log('Chegou')
        emailASerEnviado.to = email;
        remetente.sendMail(emailASerEnviado, function(error){
            if (error) {
            console.log(error);
            } else {
            console.log('Email enviado com sucesso.');
            }
        });
    },
    //Validando informações do Usuário - Validar por e-mail depois, mas to com preguiça de implementar agora
    async ValidarDados(user){
        if(user.DS_SENHA !== user.DS_SENHA_CONF)
            return "As senhas não batem!";
        else if(user.DS_SENHA.length < 6)
            return "A senha tem ter no mínimo 6 dígitos!";
        else if(user.DS_SENHA == null || user.DS_NOME == null)
            return "Favor inserir todos os campos!";
        else
            return "OK";
    }
}

module.exports = UtilController;