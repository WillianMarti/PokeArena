let pokemons = [];       // Pokémon do jogador
let pokemonsInimigos = []; // Pokémon inimigos
let pokemonJogador = null; // Pokémon selecionado pelo jogador
let pokemonInimigo = null; // Pokémon inimigo atual
let emBatalha = false;   // Flag para controlar se a batalha está ativa

// Carrega os Pokémon do jogador e os inimigos
async function carregarPokemons() {
    try {
        const responseJogador = await fetch('json/pokemons.json');
        pokemons = await responseJogador.json();

        const responseInimigo = await fetch('json/pokemonsInimigos.json');
        pokemonsInimigos = await responseInimigo.json();

        preencherSelect();
    } catch (error) {
        console.error("Erro ao carregar Pokémon:", error);
    }
}

// Cores para cada tipo de Pokémon
var cores = {
    'normal': '#97a0a7',
    'lutador': '#ce416b',
    'voador': '#8cace4',
    'venenoso': '#b568ce',
    'terrestre': '#d97845',
    'pedra': '#c5b78c',
    'inseto': '#91c12f',
    'fantasma': '#5269ad',
    'aco': '#5a8ea2',
    'fogo': '#ff9d55',
    'agua': '#5090d6',
    'planta': '#63bc5a',
    'eletrico': '#f4d23c',
    'psiquico': '#fa7179',
    'gelo': '#73cec0',
    'dragao': '#0b6dc3',
    'sombrio': '#595364',
    'fada': '#ec8fe6'
};

// Preenche o dropdown com os Pokémon disponíveis
function preencherSelect() {
    const select = document.getElementById("pokemonSelecionar");
    
    pokemons.forEach(pokemon => {
        const option = document.createElement("option");
        option.value = pokemon.nome;
        var tipoPokemon = pokemon.tipo[0]

        if (cores[tipoPokemon]) {
            option.style.backgroundColor = cores[tipoPokemon]
            option.style.fontFamily = '"Press Start 2P"'
            option.style.color = 'white'
        }
        select.style.fontFamily = '"Press Start 2P"'
        select.style.padding = '20px'

        option.textContent = pokemon.nome;
        select.appendChild(option);
    });
}

// Atualiza a cor do select quando um Pokémon é selecionado
function atualizar() {
    const select = document.getElementById("pokemonSelecionar");
    var pokemon = select.value;

    var cores = {
        'Gengar': '#5269ad',
        'Charizard': '#ff9d55',
        'Typhlosion': '#ff9d55',
        'Emboar': '#ff9d55',
        'Infernape': '#ff9d55',
        'Blaziken': '#ff9d55',
        'Blastoise': '#5090d6',
        'Feraligatr': '#5090d6',
        'Swampert': '#5090d6',
        'Empoleon': '#5090d6',
        'Samurott': '#5090d6',
        'Venusaur': '#63bc5a',
        'Sceptile': '#63bc5a',
        'Torterra': '#63bc5a',
        'Serperior': '#63bc5a',
        'Pikachu': '#f4d23c',
        'Dragonite': '#0b6dc3',
        'Garchomp': '#0b6dc3',
    };
  
    if (pokemon && cores[pokemon]) {
        select.style.backgroundColor = cores[pokemon];
        select.style.color = "white"
        select.style.fontFamily = '"Press Start 2P"'
    }
}

// Valida se o Pokémon selecionado existe
function validarPokemon(nomePokemon) {
    return pokemons.find(p => p.nome === nomePokemon);
}

// Seleciona um Pokémon inimigo aleatório
function selecionarPokemonInimigo() {
    const indiceAleatorio = Math.floor(Math.random() * pokemonsInimigos.length);
    return pokemonsInimigos[indiceAleatorio];
}

// Formata os tipos para exibição (capitalização correta)
function formatarTipos(tipos) {
    if (Array.isArray(tipos)) {
        return tipos.map(tipo => {
            tipo = tipo.toLowerCase();
            switch(tipo) {
                case 'eletrico': return 'Elétrico';
                case 'psiquico': return 'Psíquico';
                case 'sombrio': return 'Sombrio';
                case 'agua': return 'Água';
                case 'planta': return 'Planta';
                case 'fogo': return 'Fogo';
                default: return tipo.charAt(0).toUpperCase() + tipo.slice(1);
            }
        }).join(", ");
    } else {
        let tipo = tipos.toLowerCase();
        switch(tipo) {
            case 'eletrico': return 'Elétrico';
            case 'psiquico': return 'Psíquico';
            case 'sombrio': return 'Sombrio';
            case 'agua': return 'Água';
            case 'planta': return 'Planta';
            case 'fogo': return 'Fogo';
            default: return tipo.charAt(0).toUpperCase() + tipo.slice(1);
        }
    }
}

// Atualiza as barras de vida na tela
function atualizarBarrasDeVida() {
    // Garante que o HP atual nunca seja maior que o HP máximo
    if (pokemonJogador.hpAtual > pokemonJogador.hp) {
        pokemonJogador.hpAtual = pokemonJogador.hp;
    }
    
    if (pokemonInimigo.hpAtual > pokemonInimigo.hp) {
        pokemonInimigo.hpAtual = pokemonInimigo.hp;
    }

    // Calcula as porcentagens
    const porcentagemJogador = (pokemonJogador.hpAtual / pokemonJogador.hp) * 100;
    const porcentagemInimigo = (pokemonInimigo.hpAtual / pokemonInimigo.hp) * 100;

    // Atualiza as barras visuais
    document.getElementById("life").style.width = `${porcentagemJogador}%`;
    document.getElementById("life-inimigo").style.width = `${porcentagemInimigo}%`;

    // Atualiza os textos (mantendo seu formato atual)
    document.getElementById("hp-texto-jogador").textContent = 
        `${pokemonJogador.hpAtual}/${pokemonJogador.hp}`;
    document.getElementById("hp-texto-inimigo").textContent = 
        `${pokemonInimigo.hpAtual}/${pokemonInimigo.hp}`;
}

// Mostra mensagens na div de mensagens
function mostrarMensagem(texto) {
    const mensagemDiv = document.getElementById("mensagens-batalha");
    mensagemDiv.textContent = texto;
    
    // Limpa a mensagem após 2 segundos
    setTimeout(() => {
        mensagemDiv.textContent = '';
    }, 4000);
}

// Calcula o dano usando a fórmula Pokémon
function calcularDano(atacante, defensor, ataque) {
    // 1. Verifica se o ataque acerta
    if (Math.random() > ataque.precisao / 100) {
        mostrarMensagem(`${atacante.nome} errou ${ataque.nome}!`);
        return 0;
    }

    if (defensor.imunidades && defensor.imunidades.includes(ataque.tipo.toLowerCase())) {
        mostrarMensagem(`Não afeta ${defensor.nome} (imune a ${ataque.tipo})!`);
        return 0;
    }

    // 2. Cálculo base do dano
    const nivel = atacante.nivel || 50;
    const poder = ataque.dano;
    const ataqueStat = atacante.ataque || 100;
    const defesaStat = defensor.defesa || 100;

    let dano = Math.floor(
        ((2 * nivel / 5 + 2) * poder * (ataqueStat / defesaStat)) / 50 + 2
    );

    // 3. STAB (Same-Type Attack Bonus)
    const tiposAtacante = Array.isArray(atacante.tipo) ? atacante.tipo : [atacante.tipo];
    const stab = tiposAtacante.includes(ataque.tipo.toLowerCase()) ? 1.5 : 1;
    dano = Math.floor(dano * stab);

    // 4. Vantagem de tipo
    if (defensor.fraquezas && defensor.fraquezas.includes(ataque.tipo.toLowerCase())) {
        dano *= 2;
        mostrarMensagem("É super efetivo!");
    } else if (defensor.resistencias && defensor.resistencias.includes(ataque.tipo.toLowerCase())) {
        dano *= 0.5;
        mostrarMensagem("Não foi muito efetivo...");
    }

    // 5. Número aleatório entre 0.85 e 1.0
    const random = 0.85 + Math.random() * 0.15;
    dano = Math.floor(dano * random);

    return dano;
}

function mostrarPokemon(pokemon) {
    pokemonJogador = { 
        ...pokemon, 
        hpAtual: pokemon.hp // Usa o valor máximo de HP
    };
    
    const inimigo = selecionarPokemonInimigo();
    pokemonInimigo = { 
        ...inimigo, 
        hpAtual: inimigo.hp
    };
    
    emBatalha = true;

    const infoDiv = document.getElementById("pokemon-info");
    infoDiv.style.display = "block";    
    
    document.getElementById("pokemon-gif").innerHTML = `<img width="500px" height="500px" src="${pokemon.imagem}">`;
    document.getElementById("pokemon-nome").textContent = pokemon.nome;
    document.getElementById("pokemon-tipo").textContent = `Tipos: ${formatarTipos(pokemon.tipo)}`;
    document.getElementById("batalha").style.width = '80%';
    
    const infoDivInimigo = document.getElementById("pokemon-inimigo-info");
    infoDivInimigo.style.display = "block";
    document.getElementById("pokemon-inimigo-gif").innerHTML = `<img src="${pokemonInimigo.imagem}">`;
    document.getElementById("pokemon-inimigo-nome").textContent = pokemonInimigo.nome;
    document.getElementById("pokemon-inimigo-tipo").textContent = `Tipos: ${formatarTipos(pokemonInimigo.tipo)}`;
    const ataquesDiv = document.getElementById("pokemon-ataque");
    ataquesDiv.innerHTML = '';
    
    if (pokemon.ataques && pokemon.ataques.length > 0) {
        const ataquesList = document.createElement('div');
        ataquesList.className = 'ataques-lista';
        
        pokemon.ataques.forEach(ataque => {
            const ataqueDiv = document.createElement('div');
            ataqueDiv.className = 'ataque';
            
            const tipoAtaque = ataque.tipo.toLowerCase();
            if (cores[tipoAtaque]) {
                ataqueDiv.style.backgroundColor = cores[tipoAtaque];
                ataqueDiv.style.color = 'white';
            }
            
            ataqueDiv.innerHTML = `
                <strong>${ataque.nome}</strong>
                <div>Tipo: ${ataque.tipo}</div>
                <div>Dano: ${ataque.dano}</div>
                <div>Precisão: ${ataque.precisao}%</div>
            `;
            
            ataqueDiv.addEventListener('click', () => {
                if (!emBatalha) return;

                const dano = calcularDano(pokemonJogador, pokemonInimigo, ataque);
                pokemonInimigo.hpAtual = Math.max(0, pokemonInimigo.hpAtual - dano);
                mostrarMensagem(`${pokemonJogador.nome} usou ${ataque.nome} e causou ${dano} de dano!`);
                atualizarBarrasDeVida();

                if (pokemonInimigo.hpAtual <= 0) {
                    mostrarMensagem(`${pokemonInimigo.nome} foi derrotado!`);
                    emBatalha = false;
                    return;
                }

                setTimeout(() => {
                    const ataqueInimigo = pokemonInimigo.ataques[Math.floor(Math.random() * pokemonInimigo.ataques.length)];
                    const danoInimigo = calcularDano(pokemonInimigo, pokemonJogador, ataqueInimigo);
                    pokemonJogador.hpAtual = Math.max(0, pokemonJogador.hpAtual - danoInimigo);
                    mostrarMensagem(`${pokemonInimigo.nome} usou ${ataqueInimigo.nome} e causou ${danoInimigo} de dano!`);
                    atualizarBarrasDeVida();

                    // Verifica se o jogador foi derrotado
                    if (pokemonJogador.hpAtual <= 0) {
                        mostrarMensagem(`${pokemonJogador.nome} foi derrotado!`);
                        emBatalha = false;
                    }
                }, 1000);
            });
            
            ataquesList.appendChild(ataqueDiv);
        });
        
        ataquesDiv.appendChild(ataquesList);
    } else {
        ataquesDiv.textContent = 'Este Pokémon não tem ataques cadastrados.';
    }

    atualizarBarrasDeVida();
}

document.getElementById("btn-batalhar").addEventListener("click", () => {
    const select = document.getElementById("pokemonSelecionar");
    const nomePokemonSelecionado = select.value;
    
    if (!nomePokemonSelecionado) {
        mostrarMensagem("Selecione um Pokémon!");
        return;
    }
    
    const pokemonSelecionado = validarPokemon(nomePokemonSelecionado);
    
    if (pokemonSelecionado) {
        mostrarPokemon(pokemonSelecionado);
        console.log("Batalha iniciada!");
    } else {
        mostrarMensagem("Pokémon não encontrado no sistema!");
    }
});

carregarPokemons();