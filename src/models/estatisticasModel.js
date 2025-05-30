var database = require("../database/config")

function buscarResultadosBatalhas(idUsuario) {
    var instrucaoSql = `
    SELECT
    SUM(usuarioVenceu) AS vitorias,
    COUNT(usuarioVenceu) - SUM(usuarioVenceu) AS derrotas
        FROM 
           Batalha
        WHERE 
    idUsuario = ${idUsuario};
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pokemonsMaisUsados(idUsuario) {
    var instrucaoSql = `
    SELECT 
	nomePokemonJogador AS 'Nome',
	COUNT(nomePokemonJogador) AS 'VezesJogadas'
    FROM 
	Batalha
WHERE 
	idUsuario = ${idUsuario}
GROUP BY nomePokemonJogador
ORDER BY COUNT(nomePokemonJogador) DESC LIMIT 5;
`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function evolucaoResultados(idUsuario) {
    var instrucaoSql = `
    SELECT 
      DATE(dataBatalha) AS data,
      SUM(usuarioVenceu) AS vitorias,
      COUNT(*) - SUM(usuarioVenceu) AS derrotas
    FROM 
      Batalha
    WHERE 
        idUsuario = ${idUsuario}
    GROUP BY 
      DATE(dataBatalha)
    ORDER BY 
        DATE(dataBatalha)
    LIMIT 10;
`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pokemonInimigoMaisComum(idUsuario) {
    var instrucaoSql = `
        SELECT nomePokemonInimigo, COUNT(nomePokemonInimigo) AS 'pokemonInimigoComum' FROM Batalha WHERE idUsuario = ${idUsuario}  GROUP BY nomePokemonInimigo ORDER BY COUNT(nomePokemonInimigo) DESC LIMIT 1;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pokemonJogadorMaisComumNoDiaDeHoje(idUsuario) {
    var instrucaoSql = `
       SELECT nomePokemonJogador AS NomePoke, DATE(dataBatalha) AS diaDeHoje, COUNT(dataBatalha) as QtdBatalhas FROM Batalha WHERE idUsuario = ${idUsuario} AND DATE(dataBatalha) = CURRENT_DATE GROUP BY DATE(dataBatalha), nomePokemonJogador ORDER BY COUNT(dataBatalha) DESC LIMIT 1;

    `
    console.log("Executando a instruçao SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tipoQueOjogadorMaisUsou(idUsuario) {
    var instrucaoSql = `
        SELECT tipoPokemonJogador AS tipoJogador, COUNT(tipoPokemonJogador) as QtdTipo FROM Batalha WHERE idUsuario = ${idUsuario} GROUP BY tipoPokemonJogador ORDER BY COUNT(tipoPokemonJogador) DESC LIMIT 1;
    `

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tipoQueOInimigoMaisUsou(idUsuario) {
    var instrucaoSql = `
    SELECT tipoPokemonInimigo AS tipoInimigo, COUNT(tipoPokemonInimigo) as QtdTipoInimigo FROM Batalha WHERE idUsuario = ${idUsuario} GROUP BY tipoPokemonInimigo ORDER BY COUNT(tipoPokemonInimigo) DESC LIMIT 1;
    `
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaShinysComuni(idUsuario) {
    var instrucaoSql = `
    SELECT
     (SELECT AVG(pokemonJogadorShiny) FROM Batalha WHERE idUsuario = ${idUsuario}) AS MediaJogador,
     (SELECT AVG(pokemonInimigoShiny) FROM Batalha WHERE idUsuario = ${idUsuario}) AS MediaInimigo,
     (SELECT AVG(pokemonJogadorShiny) FROM Batalha) AS MediaComunidade,
     (SELECT AVG(pokemonInimigoShiny) FROM Batalha) AS MediaInimigoComunidade;    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quantidadeShinys(idUsuario) {
    var instrucaoSql = `
        SELECT SUM(pokemonInimigoShiny) as 'QuantidadeShinysInimigo', SUM(pokemonJogadorShiny) as 'QuantidadeShinysJogador' FROM Batalha WHERE idUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function winrateComunidade(idUsuario) {
    var instrucaoSql = `
SELECT 
    (SELECT ROUND(SUM(usuarioVenceu) / COUNT(usuarioVenceu) * 100, 2) FROM Batalha WHERE idUsuario = ${idUsuario}) AS WinrateUsuario,
    (SELECT ROUND(SUM(usuarioVenceu) / COUNT(usuarioVenceu) * 100, 2) FROM Batalha) AS WinrateComuni,
	(SELECT ROUND(COUNT(*) / COUNT(DISTINCT idUsuario), 2) FROM Batalha) AS MediaPartidasPorUsuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
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
};