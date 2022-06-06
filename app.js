// Função para pegar os pokemons
const fetchPokemon = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []
  let allPokemon = []
  const sortedPokemon = []
  //total pokemon 898
  // 151 são pokemons da primeira geração
  for (let i = 1; i <= 898; i++) {
    allPokemon.push(i)
  }
  newAllPokemon = allPokemon

  // Pega 30 pokemons aleatorios
  for (let i = 0; i < 30; i++) {
    sortedPokemon.push(
      parseInt(newAllPokemon.splice(math.pickRandom(newAllPokemon), 1))
    )
    //Evita valores indesejados
    if (isNaN(sortedPokemon[i])) {
      sortedPokemon.pop()
      i = i - 1
    }
  }

  //Organiza pokemons por ordem de id
  sortedPokemon.sort(function (a, b) {
    return a - b
  })

  //Pokemons selecionados - buscando dados na API
  for (let i = 1; i <= 30; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(sortedPokemon[i - 1])).then(response =>
        response.json()
      )
    )
  }
  // Criação da DOM - dados dos pokemons e lista
  Promise.all(pokemonPromises).then(pokemons => {
    const liPokemons = pokemons.reduce((accumulator, pokemon) => {
      const Generation = () => {
        if (pokemon.id > 0 && pokemon.id <= 151) {
          GeraPoke = '1º'
        }
        if (pokemon.id >= 152 && pokemon.id <= 251) {
          GeraPoke = '2º'
        }
        if (pokemon.id >= 252 && pokemon.id <= 386) {
          GeraPoke = '3º'
        }
        if (pokemon.id >= 387 && pokemon.id <= 494) {
          GeraPoke = '4º'
        }
        if (pokemon.id >= 495 && pokemon.id <= 649) {
          GeraPoke = '5º'
        }
        if (pokemon.id >= 650 && pokemon.id <= 721) {
          GeraPoke = '6º'
        }
        if (pokemon.id >= 722 && pokemon.id <= 809) {
          GeraPoke = '7º'
        }
        if (pokemon.id >= 810 && pokemon.id <= 898) {
          GeraPoke = '8º'
        }
        return GeraPoke
      }
      Generation()
      const PokeWeight = pokemon.weight / 10
      const PokeHeight = pokemon.height / 10
      const types = pokemon.types.map(typeInfo => typeInfo.type.name)
      accumulator += `
        <li class="card ${types[0]}"> 
        <img class="card-image" alt="${pokemon.name}" 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemon.id
        }.png">
        <h2 class="card-title"> ${pokemon.name} - ${pokemon.id} </h2>
        <p class="card-subtitle">
          ${types.join(' | ')} 
          </p>
        <p> Peso : ${PokeWeight} Kg </p>
        <p> Altura: ${PokeHeight} m </p>
        <p> ${GeraPoke} Geração  </p>
        </li>`
      return accumulator
    }, '')

    //Aciona na DOM dentro do item ul com a propriedade data-js
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = liPokemons
  })
}

// Chamada da função
fetchPokemon()

// Remove Pokemons from DOM
function resetPokemon() {
  const ul = document.querySelector('[data-js="pokedex"]')
  ul.innerHTML = ''
}

// Add pokemons por geração, usa o ResetPokemon
const fetchPokemonX = (a, b) => {
  resetPokemon()
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []
  let allPokemon = []
  //total pokemon 898
  // 151 são pokemons da primeira geração
  for (let i = a; i <= b; i++) {
    allPokemon.push(i)
  }

  //Pokemons selecionados - buscando dados na API
  for (let i = a; i <= b; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(i)).then(response => response.json())
    )
  }

  // Criação da DOM - dados dos pokemons e lista
  Promise.all(pokemonPromises).then(pokemons => {
    const liPokemons = pokemons.reduce((accumulator, pokemon) => {
      const Generation = () => {
        if (pokemon.id > 0 && pokemon.id <= 151) {
          GeraPoke = '1º'
        }
        if (pokemon.id >= 152 && pokemon.id <= 251) {
          GeraPoke = '2º'
        }
        if (pokemon.id >= 252 && pokemon.id <= 386) {
          GeraPoke = '3º'
        }
        if (pokemon.id >= 387 && pokemon.id <= 494) {
          GeraPoke = '4º'
        }
        if (pokemon.id >= 495 && pokemon.id <= 649) {
          GeraPoke = '5º'
        }
        if (pokemon.id >= 650 && pokemon.id <= 721) {
          GeraPoke = '6º'
        }
        if (pokemon.id >= 722 && pokemon.id <= 809) {
          GeraPoke = '7º'
        }
        if (pokemon.id >= 810 && pokemon.id <= 898) {
          GeraPoke = '8º'
        }
        return GeraPoke
      }
      Generation()
      const PokeWeight = pokemon.weight / 10
      const PokeHeight = pokemon.height / 10
      const types = pokemon.types.map(typeInfo => typeInfo.type.name)
      accumulator += `
        <li class="card ${types[0]}"> 
        <img class="card-image" alt="${pokemon.name}" 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemon.id
        }.png">
        <h2 class="card-title"> ${pokemon.name} - ${pokemon.id} </h2>
        <p class="card-subtitle">
          ${types.join(' | ')} 
          </p>
        <p> Peso : ${PokeWeight} Kg </p>
        <p> Altura: ${PokeHeight} m </p>
        <p> ${GeraPoke} Geração  </p>
        </li>`
      return accumulator
    }, '')

    //Aciona na DOM dentro do item ul com a propriedade data-js
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = liPokemons
  })
}

// Cria um time de 6 pokemons aleatorios
const fetchPokemonMyTeam = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []
  let allPokemon = []
  const sortedPokemon = []
  //total pokemon 898
  // 151 são pokemons da primeira geração
  for (let i = 1; i <= 898; i++) {
    allPokemon.push(i)
  }
  newAllPokemon = allPokemon

  // Pega 30 pokemons aleatorios
  for (let i = 0; i < 6; i++) {
    sortedPokemon.push(
      parseInt(newAllPokemon.splice(math.pickRandom(newAllPokemon), 1))
    )
    //Evita valores indesejados
    if (isNaN(sortedPokemon[i])) {
      sortedPokemon.pop()
      i = i - 1
    }
  }

  //Organiza pokemons por ordem de id
  sortedPokemon.sort(function (a, b) {
    return a - b
  })

  //Pokemons selecionados - buscando dados na API
  for (let i = 1; i <= 6; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(sortedPokemon[i - 1])).then(response =>
        response.json()
      )
    )
  }
  // Criação da DOM - dados dos pokemons e lista
  Promise.all(pokemonPromises).then(pokemons => {
    const liPokemons = pokemons.reduce((accumulator, pokemon) => {
      const Generation = () => {
        if (pokemon.id > 0 && pokemon.id <= 151) {
          GeraPoke = '1º'
        }
        if (pokemon.id >= 152 && pokemon.id <= 251) {
          GeraPoke = '2º'
        }
        if (pokemon.id >= 252 && pokemon.id <= 386) {
          GeraPoke = '3º'
        }
        if (pokemon.id >= 387 && pokemon.id <= 494) {
          GeraPoke = '4º'
        }
        if (pokemon.id >= 495 && pokemon.id <= 649) {
          GeraPoke = '5º'
        }
        if (pokemon.id >= 650 && pokemon.id <= 721) {
          GeraPoke = '6º'
        }
        if (pokemon.id >= 722 && pokemon.id <= 809) {
          GeraPoke = '7º'
        }
        if (pokemon.id >= 810 && pokemon.id <= 898) {
          GeraPoke = '8º'
        }
        return GeraPoke
      }
      Generation()
      const PokeWeight = pokemon.weight / 10
      const PokeHeight = pokemon.height / 10
      const types = pokemon.types.map(typeInfo => typeInfo.type.name)
      accumulator += `
        <li class="card ${types[0]}"> 
        <img class="card-image" alt="${pokemon.name}" 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemon.id
        }.png">
        <h2 class="card-title"> ${pokemon.name} - ${pokemon.id} </h2>
        <p class="card-subtitle">
          ${types.join(' | ')} 
          </p>
        <p> Peso : ${PokeWeight} Kg </p>
        <p> Altura: ${PokeHeight} m </p>
        <p> ${GeraPoke} Geração  </p>
        </li>`
      return accumulator
    }, '')

    //Aciona na DOM dentro do item ul com a propriedade data-js
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = liPokemons
  })
}

const fetchPokemonMore = () => {
  const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

  const pokemonPromises = []
  let allPokemon = []
  const sortedPokemon = []
  //total pokemon 898
  // 151 são pokemons da primeira geração
  for (let i = 1; i <= 898; i++) {
    allPokemon.push(i)
  }
  newAllPokemon = allPokemon

  // Pega 30 pokemons aleatorios
  for (let i = 0; i < 30; i++) {
    sortedPokemon.push(
      parseInt(newAllPokemon.splice(math.pickRandom(newAllPokemon), 1))
    )
    //Evita valores indesejados
    if (isNaN(sortedPokemon[i])) {
      sortedPokemon.pop()
      i = i - 1
    }
  }

  //Organiza pokemons por ordem de id
  sortedPokemon.sort(function (a, b) {
    return a - b
  })

  //Pokemons selecionados - buscando dados na API
  for (let i = 1; i <= 30; i++) {
    pokemonPromises.push(
      fetch(getPokemonUrl(sortedPokemon[i - 1])).then(response =>
        response.json()
      )
    )
  }
  // Criação da DOM - dados dos pokemons e lista
  Promise.all(pokemonPromises).then(pokemons => {
    const liPokemons = pokemons.reduce((accumulator, pokemon) => {
      const Generation = () => {
        if (pokemon.id > 0 && pokemon.id <= 151) {
          GeraPoke = '1º'
        }
        if (pokemon.id >= 152 && pokemon.id <= 251) {
          GeraPoke = '2º'
        }
        if (pokemon.id >= 252 && pokemon.id <= 386) {
          GeraPoke = '3º'
        }
        if (pokemon.id >= 387 && pokemon.id <= 494) {
          GeraPoke = '4º'
        }
        if (pokemon.id >= 495 && pokemon.id <= 649) {
          GeraPoke = '5º'
        }
        if (pokemon.id >= 650 && pokemon.id <= 721) {
          GeraPoke = '6º'
        }
        if (pokemon.id >= 722 && pokemon.id <= 809) {
          GeraPoke = '7º'
        }
        if (pokemon.id >= 810 && pokemon.id <= 898) {
          GeraPoke = '8º'
        }
        return GeraPoke
      }
      Generation()
      const PokeWeight = pokemon.weight / 10
      const PokeHeight = pokemon.height / 10
      const types = pokemon.types.map(typeInfo => typeInfo.type.name)
      accumulator += `
        <li class="card ${types[0]}"> 
        <img class="card-image" alt="${pokemon.name}" 
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemon.id
        }.png">
        <h2 class="card-title"> ${pokemon.name} - ${pokemon.id} </h2>
        <p class="card-subtitle">
          ${types.join(' | ')} 
          </p>
        <p> Peso : ${PokeWeight} Kg </p>
        <p> Altura: ${PokeHeight} m </p>
        <p> ${GeraPoke} Geração  </p>
        </li>`
      return accumulator
    }, '')

    //Aciona na DOM dentro do item ul com a propriedade data-js
    const ul = document.querySelector('[data-js="pokedex"]')
    ul.innerHTML = ul.innerHTML + liPokemons
  })
}
