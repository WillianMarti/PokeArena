var database = require("../database/config")

function cadastrarInimigo(nomePokemonInimigo) {
var instrucaoSql = `
    INSERT INTO PersonagemInimigo (nomePokemonInimigo) VALUES ('${nomePokemonInimigo}');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarInimigo
};