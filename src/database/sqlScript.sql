CREATE DATABASE PokeArena;

USE PokeArena;
select * from batalha JOIN usuario ON idUsuario = id WHERE idUsuario = 1	;

CREATE TABLE Usuario (
	id 				INT PRIMARY KEY AUTO_INCREMENT,
    nome 			VARCHAR(50),
    email 			VARCHAR(100) UNIQUE,
    senha 			VARCHAR(20)
);

CREATE TABLE PersonagemInimigo (
	idPersonagemInimigo		INT PRIMARY KEY AUTO_INCREMENT,
    nomePokemonInimigo 			 VARCHAR(40)
);
INSERT INTO Batalha (fkIdPersonagemInimigo, nomePokemonInimigo, tipoPokemonInimigo,PokemonInimigoShiny, dataBatalha, idUsuario, nomePokemonJogador, tipoPokemonJogador, pokemonJogadorShiny, usuarioVenceu) VALUES
(80, 'Charizard', 'fogo', 1, '2025-05-24 13:56:00', 1, 'Garchomp', 'dragao', 1, 1),
(81, 'Blastoise', 'agua', 1, '2025-05-25 3:56:00', 1, 'Tyranitar', 'pedra', 1, 1),
(82, 'Venusaur', 'planta', 1, '2025-05-26 13:56:00', 1, 'Garchomp', 'dragao', 1, 1),
(83, 'Alazakam', 'psiquico', 1, '2025-05-27 13:56:00', 1, 'Charizard', 'fogo', 1, 1),
(84, 'Raticate', 'Normal', 1, '2025-05-28 13:56:00', 1, 'Charizard', 'fogo', 1, 1),
(85, 'Charizard', 'fogo', 1, '2025-05-29 13:56:00', 1, 'Charizard', 'fogo', 1, 1);

CREATE TABLE Batalha (
	idBatalha 				INT AUTO_INCREMENT,
    fkIdPersonagemInimigo 	INT, -- FK PERSONAGEM INIMIGO
    nomePokemonInimigo    VARCHAR(40), -- FK PERSONAGEM INIMIGO
    tipoPokemonInimigo      VARCHAR(20),
    pokemonInimigoShiny     TINYINT(1),
    dataBatalha 			datetime DEFAULT CURRENT_TIMESTAMP,
    idUsuario 				INT,
    nomePokemonJogador      VARCHAR(40),
    tipoPokemonJogador      VARCHAR(20),
    pokemonJogadorShiny     TINYINT(1),
    
    usuarioVenceu			TINYINT(1),
    CONSTRAINT fkPersonagemInimigo FOREIGN KEY (fkIdPersonagemInimigo)
		REFERENCES PersonagemInimigo(idPersonagemInimigo),
	CONSTRAINT fkUsuario		   FOREIGN KEY (idUsuario)
		REFERENCES usuario(id),
	CONSTRAINT pkComposta PRIMARY KEY (idBatalha, fkIdPersonagemInimigo, idUsuario)
);

SELECT * FROM USUARIO;
SELECT * FROM personagemInimigo;
select * from batalha;

SELECT 
    DATE(dataBatalha) AS data,
    SUM(usuarioVenceu) AS vitorias,
    COUNT(*) - SUM(usuarioVenceu) AS derrotas
FROM 
    Batalha
WHERE 
    idUsuario = 1
GROUP BY 
    DATE(dataBatalha)
ORDER BY 
    DATE(dataBatalha);

SELECT 
    DATE(dataBatalha) AS data,
    nomePokemonJogador,
    COUNT(*) AS vezes_usado
FROM 
    Batalha
WHERE 
    idUsuario = 1
    AND nomePokemonJogador IN (
        SELECT nomePokemonJogador
        FROM Batalha
        WHERE idUsuario = 1
        GROUP BY nomePokemonJogador
        ORDER BY COUNT(*) DESC
    )
GROUP BY 
    DATE(dataBatalha), nomePokemonJogador
ORDER BY 
    DATE(dataBatalha), nomePokemonJogador LIMIT 3;

SELECT * FROM BATALHA;

SELECT COUNT(usuarioVenceu) AS Resultados_Batalha, SUM(usuarioVenceu) AS Vitórias FROM batalha WHERE idUsuario = 1 GROUP BY usuarioVenceu;

SELECT COUNT(idPersonagemInimigo) FROM personagemInimigo;

SELECT 
    COUNT(usuarioVenceu) AS partidasTotais,
    SUM(usuarioVenceu) AS vitorias,
    COUNT(usuarioVenceu) - SUM(usuarioVenceu) AS derrotas
FROM 
    Batalha
WHERE 
    idUsuario = 1;

SELECT idPersonagemInimigo FROM PersonagemInimigo WHERE nomePokemonInimigo = 'Dragonite' ORDER BY idPersonagemInimigo DESC LIMIT 1;

SELECT 
    nomePokemonJogador AS 'Seu Pokémon',
    tipoPokemonJogador AS 'Tipo',
    nomePokemonInimigo AS 'Pokémon Inimigo',
    tipoPokemonInimigo AS 'Tipo Inimigo',
    pokemonJogadorShiny AS 'Pokémon Jogador é Shiny',
    pokemonInimigoShiny AS 'Pokémon Inimigo é Shiny',
    usuarioVenceu		AS 'Resultado Batalha'
FROM 
    Batalha
WHERE 
    idUsuario = 1
ORDER BY 
    idBatalha DESC  
LIMIT 10;

SELECT 
	nomePokemonJogador AS 'Nome',
	COUNT(nomePokemonJogador) AS 'Vezes Jogadas'
    FROM 
	Batalha
WHERE 
	idUsuario = 1
GROUP BY nomePokemonJogador
ORDER BY COUNT(nomePokemonJogador) DESC LIMIT 5;

SELECT * FROM Batalha WHERE idUsuario = 1;

SELECT SUM(pokemonInimigoShiny) as 'QuantidadeShinysInimigo', SUM(pokemonJogadorShiny) as 'QuantidadeShinysJogador' FROM Batalha WHERE idUsuario = 1;
SELECT SUM(pokemonJogadorShiny) as 'Quantidade Shinys' FROM Batalha WHERE idUsuario = 1;
SELECT tipoPokemonInimigo AS tipoInimigo, COUNT(tipoPokemonInimigo) as QtdTipoInimigo FROM Batalha WHERE idUsuario = 1 GROUP BY tipoPokemonInimigo ORDER BY COUNT(tipoPokemonInimigo) DESC LIMIT 1;
SELECT tipoPokemonJogador AS tipoJogador, COUNT(tipoPokemonJogador) as QtdTipo FROM Batalha WHERE idUsuario = 1 GROUP BY tipoPokemonJogador ORDER BY COUNT(tipoPokemonJogador) DESC LIMIT 1;
SELECT DATE(dataBatalha) AS diaDeHoje, COUNT(dataBatalha) as QtdBatalhas FROM Batalha WHERE idUsuario = 1 AND DATE(dataBatalha) = CURRENT_DATE GROUP BY DATE(dataBatalha), nomePokemonJogador ORDER BY COUNT(dataBatalha) DESC LIMIT 1;
SELECT DATE(dataBatalha), COUNT(dataBatalha) AS 'Dia de Maior Quantidade de Batalhas' FROM Batalha WHERE idUsuario = 1 GROUP BY DATE(dataBatalha) ORDER by COUNT(dataBatalha) DESC LIMIT 10;
SELECT nomePokemonInimigo, COUNT(nomePokemonInimigo) AS 'pokemonInimigoComum' FROM Batalha WHERE idUsuario = 1  GROUP BY nomePokemonInimigo ORDER BY COUNT(nomePokemonInimigo) DESC LIMIT 1;
SELECT nomePokemonJogador, COUNT(nomePokemonInimigo) AS 'pokemonInimigoComum' FROM Batalha WHERE idUsuario = 1  GROUP BY nomePokemonInimigo ORDER BY COUNT(nomePokemonInimigo) DESC LIMIT 1;

SELECT SUM(pokemonJogadorShiny) AS 'Quantidade Pokemons Shiny' FROM Batalha WHERE idUsuario = 1;
SELECT AVG(pokemonJogadorShiny) AS 'MediaJogador', AVG(pokemonInimigoShiny) AS 'MediaInimigo' FROM Batalha WHERE idUsuario = 30;
SELECT AVG(pokemonJogadorShiny) AS 'MediaComunidade', AVG(pokemonInimigoShiny) AS 'MediaInimigoComunidade' FROM Batalha;
SELECT AVG(pokemonJogadorShiny) FROM Batalha;
SELECT SUM(pokemonInimigoShiny) AS 'Quantidade Pokemons Shiny Inimigo' FROM Batalha WHERE idUsuario = 1;
SELECT 
    (SELECT ROUND(SUM(usuarioVenceu) / COUNT(usuarioVenceu) * 100, 2) FROM Batalha WHERE idUsuario = 1) AS WinrateUsuario,
    (SELECT ROUND(SUM(usuarioVenceu) / COUNT(usuarioVenceu) * 100, 2) FROM Batalha) AS WinrateComuni,
	(SELECT ROUND(COUNT(*) / COUNT(DISTINCT idUsuario), 2) FROM Batalha) AS MediaPartidasPorUsuario;
SELECT
  (SELECT AVG(pokemonJogadorShiny) FROM Batalha WHERE idUsuario = 1) AS MediaJogador,
  (SELECT AVG(pokemonInimigoShiny) FROM Batalha WHERE idUsuario = 1) AS MediaInimigo,
  (SELECT AVG(pokemonJogadorShiny) FROM Batalha) AS MediaComunidade,
  (SELECT AVG(pokemonInimigoShiny) FROM Batalha) AS MediaInimigoComunidade;