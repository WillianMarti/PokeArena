let pokemons = [];       // Pokémon do jogador
let pokemonsInimigos = []; // Pokémon inimigos

// Carrega os Pokémon do jogador e os inimigos
async function carregarPokemons() {
    try {
        const responseJogador = await fetch('json/pokemons.json');
        pokemons = await responseJogador.json();

        const responseInimigo = await fetch('json/pokemonsInimigos.json');
        pokemonsInimigos = await responseInimigo.json(); // Corrigido aqui

        preencherSelect();
    } catch (error) {
        console.error("Erro ao carregar Pokémon:", error);
    }
}



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



function validarPokemon(nomePokemon) {
    return pokemons.find(p => p.nome === nomePokemon);
}

function selecionarPokemonInimigo() {
    const indiceAleatorio = Math.floor(Math.random() * pokemonsInimigos.length);
    return pokemonsInimigos[indiceAleatorio];
}



function mostrarPokemon(pokemon) {
    const infoDiv = document.getElementById("pokemon-info");
    infoDiv.style.display = "block";

    var pokemonInimigonum = Math.round(Math.random())
    pokemonInimigonum * 84;

    pokemonsInimigos[pokemonInimigonum]
    
    document.getElementById("pokemon-gif").innerHTML = `<img width="500px" height="500px" src="${pokemon.imagem}">`
    document.getElementById("pokemon-nome").textContent = pokemon.nome
    document.getElementById("pokemon-hp").textContent = `HP(Health Points): ${pokemon.hp}`
    if (pokemon.tipo == 'eletrico')
    {
        pokemon.tipo = 'Elétrico'
    }
    if (pokemon.tipo == 'fogo')
    {
        pokemon.tipo = 'Fogo'
    }

    const pokemonInimigo = selecionarPokemonInimigo();
    const infoDivInimigo = document.getElementById("pokemon-inimigo-info");
    infoDivInimigo.style.display = "block";



    document.getElementById("pokemon")
    document.getElementById("pokemon-tipo").textContent = `Tipos: 
        ${Array.isArray(pokemon.tipo) ? pokemon.tipo.join(", ") : pokemon.tipo}
        `
        const ataquesDiv = document.getElementById("pokemon-ataque");
        ataquesDiv.innerHTML = '';
        
        if (pokemon.ataques && pokemon.ataques.length > 0) {
            const ataquesTitle = document.createElement('h3');

            ataquesDiv.appendChild(ataquesTitle);
            
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
                    console.log(`Usando ${ataque.nome}!`);
                });
                
                ataquesList.appendChild(ataqueDiv);
            });
            
            ataquesDiv.appendChild(ataquesList);
        } else {
            ataquesDiv.textContent = 'Este Pokémon não tem ataques cadastrados.';
        }
    
    document.getElementById("pokemon-inimigo-gif").innerHTML = `<img src="${pokemonInimigo.imagem}">`;
    document.getElementById("pokemon-inimigo-nome").textContent = pokemonInimigo.nome;
    document.getElementById("pokemon-inimigo-hp").textContent = `HP(Health Points): ${pokemonInimigo.hp}`

    let tipoInimigo = Array.isArray(pokemonInimigo.tipo) ? pokemonInimigo.tipo.join(", ") : pokemonInimigo.tipo;
    if (tipoInimigo.toLowerCase() === "eletrico") {
        tipoInimigo = "Elétrico";
    } else if (tipoInimigo.toLowerCase() === "fogo") {
        tipoInimigo = "Fogo";
    }
    document.getElementById("pokemon-inimigo-tipo").textContent = `Tipos: ${tipoInimigo}`;
}


    document.getElementById("btn-batalhar").addEventListener("click", () => {
        const select = document.getElementById("pokemonSelecionar");
        const nomePokemonSelecionado = select.value;
        
        if (!nomePokemonSelecionado) {
            alert("Selecione um Pokémon!");
            return;
        }
        
        const pokemonSelecionado = validarPokemon(nomePokemonSelecionado);
        
        if (pokemonSelecionado) {
            mostrarPokemon(pokemonSelecionado);
            
            console.log("Batalha iniciada!");
            console.log("Jogador:", pokemonSelecionado);
        } else {
            alert("Pokémon não encontrado no sistema!");
        }
    });

carregarPokemons();