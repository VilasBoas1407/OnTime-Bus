const apiBhBus =  require('../services/api');
const apiTeste = require('../services/api');
var BusController = {

    async GetPontos(req,res){
        try{
            const { latitude, longitude } = req.query;
            let linhas = [];

            const pontos = await apiBhBus.get(`bus/GetParadasProximas?latitude=${latitude}&longitude=${longitude}`);
            const arrayLinhas = pontos.data.places;

            arrayLinhas.forEach(e => {
                console.log(e);
                let hasValue = linhas.indexOf(e.COD_LINHA);
                console.log(hasValue);
                if(hasValue != -1)
                    linhas.push(e.COD_LINHA);                
            });
            
            console.log(linhas);

            const horarios = await apiTeste.get(`bus/BuscarHorarioLinhas?linhas=${linhas}`)
    
            return res.status(200).send({'pontos':pontos.data});        
        }
        catch(err){
            return res.status(500).send({'erro': 'Ocorreu um erro!' + err});
        }

    }
}

module.exports = BusController;