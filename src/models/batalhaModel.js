var database = require("../database/config")


function cadastrarInimigo(nomePokemonInimigo) {
     var instrucaoSql = `
        INSERT INTO PersonagemInimigo (nomePokemonInimigo)
        VALUES ('${nomePokemonInimigo}');
    `;
    console.log("Executando o INSERT: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
        .then(() => {
            var instrucaoSelect = `
                SELECT idPersonagemInimigo FROM PersonagemInimigo
                WHERE nomePokemonInimigo = '${nomePokemonInimigo}'
                ORDER BY idPersonagemInimigo DESC
                LIMIT 1;
            `;
            console.log("Executando o SELECT: \n" + instrucaoSelect);
            return database.executar(instrucaoSelect);
        });
}

function cadastrarBatalha(fkIdPersonagemInimigo, fkNomePokemonInimigo, tipoPokemonInimigo, PokemonInimigoShiny, idUsuario, nomePokemonJogador, tipoPokemonJogador, PokemonJogadorShiny, UsuarioVenceu) {
var instrucaoSql = `
INSERT INTO Batalha (fkIdPersonagemInimigo, nomePokemonInimigo, tipoPokemonInimigo, pokemonInimigoShiny, idUsuario, nomePokemonJogador, tipoPokemonJogador, pokemonJogadorShiny, UsuarioVenceu)
VALUES
(${fkIdPersonagemInimigo}, '${fkNomePokemonInimigo}', '${tipoPokemonInimigo}', ${PokemonInimigoShiny}, ${idUsuario}, '${nomePokemonJogador}', '${tipoPokemonJogador}', ${PokemonJogadorShiny}, ${UsuarioVenceu});
`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarInimigo,
    cadastrarBatalha
};