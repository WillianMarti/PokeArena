let pokemons = [];       // Pokémon do jogador
let pokemonsInimigos = []; // Pokémon inimigos
let pokemonJogador = null; // Pokémon selecionado pelo jogador
let pokemonInimigo = null; // Pokémon inimigo atual
let emBatalha = false;   // Flag para controlar se a batalha está ativa

// Carrega os Pokémon do jogador e os inimigos
async function carregarPokemons() {
    try {
        const responseJogador = await fetch('../json/pokemons.json');
        pokemons = await responseJogador.json();

        const responseInimigo = await fetch('../json/pokemonsInimigos.json');
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

// Calcula o dano usando a fórmula Pokémon
function calcularDano(atacante, defensor, ataque) {
    // 1. Verifica se o ataque acerta
    if (Math.random() > ataque.precisao / 100) {
            mostrarMensagem(`${atacante.nome} errou ${ataque.nome}! `);  
        return 0;
    }

    if (defensor.imunidades && defensor.imunidades.includes(ataque.tipo.toLowerCase())) {
        mostrarMensagem(`Não afeta ${defensor.nome} (imune a ${ataque.tipo})! `);
        return 0;
    }

    // 2. Cálculo base do dano
    const nivel = atacante.nivel 
    const poder = ataque.dano;
    const ataqueStat = atacante.ataque 
    const defesaStat = defensor.defesa 

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
        mostrarMensagem("É super efetivo! ");
    } else if (defensor.resistencias && defensor.resistencias.includes(ataque.tipo.toLowerCase())) {
        dano *= 0.5;
        mostrarMensagem("Não foi muito efetivo... ");
    }

    // 5. Número aleatório entre 0.85 e 1.0
    const random = 0.85 + Math.random() * 0.15;
    dano = Math.floor(dano * random);

    return dano;
}


function mostrarPokemon(pokemon) {
    document.getElementById("pokemon-gif-pre").innerHTML = ``
    document.getElementById("pokemon-gif-pre").style.minWidth = `0%`
    document.getElementById("pokemon-gif-shiny-pre").innerHTML = ``;
    document.getElementById("pokemon-gif-shiny-pre").style.minWidth = `0%`;
    document.getElementById("pokemon-nome-pre").innerHTML = ``;
    document.getElementById("pokemon-nome-pre").style.minWidth = `0%`;
    document.getElementById("pokemon-tipo-pre").innerHTML = ``;
    document.getElementById("pokemon-tipo-pre").style.minWidth = `0%`;
    document.getElementById("batalha").style.marginTop = `-12%`;



    var numAlei = Math.round(Math.random() * 3)
    var numAlej = Math.round(Math.random() * 3)
    var shinyi = false
    var shinyj = false
    if (numAlei == 1){
        shinyi = true
    }
    if (numAlej == 2){
        shinyj = true
    }

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

    var aleatorio = Math.floor(Math.random() * 7) 

    if (aleatorio == 1){
        document.getElementById("batalha").style.backgroundImage = "url(assets/batalhapokemon.webp)"
    }else if (aleatorio == 2){
        document.getElementById("batalha").style.backgroundImage = "url(assets/pokebatalha2.gif)"
    }else if (aleatorio == 3){
        document.getElementById("batalha").style.backgroundImage = "url(assets/battlepokeke.gif)"
    }else if (aleatorio == 4){
        document.getElementById("batalha").style.backgroundImage = "url(assets/batalhapokemon3.png)"
    }else if (aleatorio == 5){
        document.getElementById("batalha").style.backgroundImage = "url(assets/pokebatalha4.png)"
    }else if (aleatorio == 6){
        document.getElementById("batalha").style.backgroundImage = "url(assets/pokebatalha5.png)"
    }else if (aleatorio == 7){
        document.getElementById("batalha").style.backgroundImage = "url(assets/pokebatalha6.png)"
    }else{
        document.getElementById("batalha").style.backgroundImage = "url(assets/pokebatalha2.gif)"
    }

    document.getElementById("mensagens-batalha").style.width = "80%"
    document.getElementById("mensagens-batalha").style.padding = "15px"
 
    if (shinyj == true){
        document.getElementById("pokemon-gif").innerHTML = `<img width="150px" height="150px" id="pokemon" src="${pokemon.imagemShiny}">`;
    }else{
        document.getElementById("pokemon-gif").innerHTML = `<img width="150px" height="150px" id="pokemon" src="${pokemon.imagem}">`;
    }
    document.getElementById("pokemon-nome").textContent = pokemon.nome;
    document.getElementById("pokemon-tipo").textContent = `Tipos: ${formatarTipos(pokemon.tipo)}`;
    document.getElementById("batalha").style.width = '70%';
    document.getElementById("batalha").style.minHeight = '100%';

    
    const infoDivInimigo = document.getElementById("pokemon-inimigo-info");
    infoDivInimigo.style.display = "block";

    if (shinyi == true){
        document.getElementById("pokemon-inimigo-gif").innerHTML = `<img width="150px" height="150px" id="pokemon-inimi" src="${pokemonInimigo.imagemShiny}">`;
        shinyi = false
    }else{
        document.getElementById("pokemon-inimigo-gif").innerHTML = `<img width="150px" height="150px" id="pokemon-inimi" src="${pokemonInimigo.imagem}">`;
    }

    document.getElementById("pokemon-inimigo-nome").textContent = pokemonInimigo.nome;
    document.getElementById("pokemon-inimigo-tipo").textContent = `Tipos: ${formatarTipos(pokemonInimigo.tipo)}`;
    const ataquesDiv = document.getElementById("pokemon-ataque");
    ataquesDiv.innerHTML = '';
    
    cadastrarInimigo(pokemonInimigo)
    
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
                animarPokemon()

                const dano = calcularDano(pokemonJogador, pokemonInimigo, ataque);
                pokemonInimigo.hpAtual = Math.max(0, pokemonInimigo.hpAtual - dano);
                mostrarMensagem(`${pokemonJogador.nome} usou ${ataque.nome} e causou ${dano} de dano! `);
                atualizarBarrasDeVida();

                if (pokemonInimigo.hpAtual <= 0) {
                    mostrarMensagem(`${pokemonInimigo.nome} foi derrotado!`);
                    emBatalha = false;
                document.getElementById("pokemon-ataque").style.filter = "none"

                    return;
                }
                animarPokemonInimigo()

                setTimeout(() => {
                    const ataqueInimigo = pokemonInimigo.ataques[Math.floor(Math.random() * pokemonInimigo.ataques.length)];
                    const danoInimigo = calcularDano(pokemonInimigo, pokemonJogador, ataqueInimigo);
                    animarPokemonDano()
                    pokemonJogador.hpAtual = Math.max(0, pokemonJogador.hpAtual - danoInimigo);
                    mostrarMensagem(`${pokemonInimigo.nome} usou ${ataqueInimigo.nome} e causou ${danoInimigo} de dano! `);
                    atualizarBarrasDeVida();
                    // Verifica se o jogador foi derrotado
                    if (pokemonJogador.hpAtual <= 0) {
                        mostrarMensagem(`${pokemonJogador.nome} foi derrotado!`);
                        emBatalha = false;
    document.getElementById("pokemon-ataque").style.filter = "none"
                    }

                    
                }, 5000);
            });
            
            ataquesList.appendChild(ataqueDiv);
        });
        
        ataquesDiv.appendChild(ataquesList);
    }
    atualizarBarrasDeVida();
}

function animarPokemon() {
    document.getElementById("pokemon").classList.add("atacar")
    setTimeout(() => {
    document.getElementById("pokemon").classList.remove("atacar")
    }, 2000);
}

function animarPokemonInimigo() {
    document.getElementById("pokemon-inimi").classList.add("piscar")
    setTimeout(() => {
    document.getElementById("pokemon-inimi").classList.remove("piscar")
    }, 2000);
}

function animarPokemonDano() {
    document.getElementById("pokemon-inimi").classList.add("atacarInimigo")
    document.getElementById("pokemon").classList.add("piscar")
    setTimeout(() => {
    document.getElementById("pokemon").classList.remove("piscar")
    document.getElementById("pokemon-inimi").classList.remove("atacarInimigo")
    setTimeout(() => {
    document.getElementById("pokemon-ataque").style.pointerEvents = "all"
    document.getElementById("pokemon-ataque").style.filter = "none"
    }, 3000);
    }, 1800);
}


function mostrarMensagem(texto) {
    const mensagemDiv = document.getElementById("mensagens-batalha");
    mensagemDiv.textContent += texto;

    document.getElementById("pokemon-ataque").style.pointerEvents = "none"
    document.getElementById("pokemon-ataque").style.filter = "grayscale(100%)"

    setTimeout(() => {
        mensagemDiv.textContent = '';
    }, 4000);
}


document.getElementById("btn-batalhar").addEventListener("click", () => {
    const select = document.getElementById("pokemonSelecionar");
    const nomePokemonSelecionado = select.value;
    document.getElementById("pokemon-ataque").style.pointerEvents = "all"
    document.getElementById("pokemon-ataque").style.filter = "none"
    
    
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

function cadastrarInimigo(pokemonInimigo) {

    var nomePokemonInimigo = pokemonInimigo.nome

    fetch("/batalhas/cadastrarInimigo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nomePokemonInimigo
    }),
    })
        .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            console.log('tudo ok')
        } else {
          throw "Houve um erro ao tentar realizar o cadastro do pokemon inimigo!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
}

carregarPokemons();