var batalhaModel = require("../models/batalhaModel");

function cadastrarInimigo(req, res) {
    console.log("Recebido no req.body:", req.body); // debug

    var nomePokemonInimigo = req.body.nome;


    if (!nomePokemonInimigo || nomePokemonInimigo.trim() === "") {
        return res.status(400).send("Nome do Pokémon inimigo é inválido!");
    }

    batalhaModel.cadastrarInimigo(nomePokemonInimigo)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao cadastrar:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}


module.exports = {
    cadastrarInimigo
}