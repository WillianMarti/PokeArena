var estatisticasModel = require("../models/estatisticasModel");

function buscarResultadosBatalhas(req, res) {

        var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as vitorias e derrotas`);

    estatisticasModel.buscarResultadosBatalhas(idUsuario)
    .then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pokemonsMaisUsados(req, res){        

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as vitorias e derrotas`);

    estatisticasModel.pokemonsMaisUsados(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function evolucaoResultados(req, res){        

    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando as vitorias e derrotas`);

    estatisticasModel.evolucaoResultados(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pokemonInimigoMaisComum(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log(`Recuperando o pokemon inimigo mais comum`);

    estatisticasModel.pokemonInimigoMaisComum(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pokemonJogadorMaisComumNoDiaDeHoje(req, res){
    var idUsuario = req.params.idUsuario;

    console.log("recuperando o pokemon jogador mais comum do dia de hoje")

    estatisticasModel.pokemonJogadorMaisComumNoDiaDeHoje(idUsuario).then(function (resultado) {

  if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function tipoQueOjogadorMaisUsou(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("recuperando o tipo que o jogador mais usou")

    estatisticasModel.tipoQueOjogadorMaisUsou(idUsuario).then(function (resultado) {

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function tipoQueOInimigoMaisUsou(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("recuperando o tipo que o inimigo mais usou")

    estatisticasModel.tipoQueOInimigoMaisUsou(idUsuario).then(function (resultado) {    
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


mediaShinysComuni = function(req, res) {    
    var idUsuario = req.params.idUsuario;
    console.log("Recuperando a média de shinys comuns");

    estatisticasModel.mediaShinysComuni(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function quantidadeShinys(req, res) {  
    var idUsuario = req.params.idUsuario;

    console.log("Recuperando a quantidade de shinys");

    estatisticasModel.quantidadeShinys(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function winrateComunidade(req, res) {
    var idUsuario = req.params.idUsuario;

    console.log("Recuperando a winrate da comunidade");

    estatisticasModel.winrateComunidade(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    }); 
}

module.exports = {
    buscarResultadosBatalhas,
    pokemonsMaisUsados,
    evolucaoResultados,
    pokemonInimigoMaisComum,
    pokemonJogadorMaisComumNoDiaDeHoje,
    tipoQueOjogadorMaisUsou,
    tipoQueOInimigoMaisUsou,
    mediaShinysComuni,
    quantidadeShinys,
    winrateComunidade
}