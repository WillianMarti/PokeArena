var batalhaModel = require("../models/batalhaModel.js");

function cadastrarInimigo(req, res) {
    var nome = req.body.nomePokemonInimigo;

    batalhaModel.cadastrarInimigo(nome)
        .then(resultado => {
            res.status(200).json({
                mensagem: "Inimigo cadastrado com sucesso",
                resultado: resultado
            });
        }).catch(erro => {
            console.log("#ERRO:", erro.sqlMessage || erro);
            res.status(500).json({
                erro: "Erro ao cadastrar inimigo",
                detalhe: erro.sqlMessage || erro
            });
        });
}

function cadastrarBatalha(req, res) {
    console.log("Recebido no req.body:", req.body);

    var fkIdPersonagemInimigo = req.body.fkIdPersonagemInimigo
    var fkNomePokemonInimigo = req.body.fkNomePokemonInimigo;
    var tipoPokemonInimigo = req.body.tipoPokemonInimigo;
    var PokemonInimigoShiny = req.body.PokemonInimigoShiny;
    var idUsuario = req.body.idUsuario;
    var nomePokemonJogador = req.body.nomePokemonJogador;
    var tipoPokemonJogador = req.body.tipoPokemonJogador;
    var PokemonJogadorShiny = req.body.PokemonJogadorShiny;
    var UsuarioVenceu = req.body.UsuarioVenceu;

    if (!fkIdPersonagemInimigo || !fkNomePokemonInimigo || !tipoPokemonInimigo || 
        PokemonInimigoShiny === undefined || !idUsuario || !nomePokemonJogador || 
        !tipoPokemonJogador || PokemonJogadorShiny === undefined || UsuarioVenceu === undefined) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    batalhaModel.cadastrarBatalha(
        fkIdPersonagemInimigo,
        fkNomePokemonInimigo, 
        tipoPokemonInimigo, 
        PokemonInimigoShiny, 
        idUsuario, 
        nomePokemonJogador, 
        tipoPokemonJogador, 
        PokemonJogadorShiny, 
        UsuarioVenceu
    )
    .then(resultado => res.json(resultado))
    .catch(erro => {
        console.error("Erro ao cadastrar batalha:", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrarInimigo,
    cadastrarBatalha
};