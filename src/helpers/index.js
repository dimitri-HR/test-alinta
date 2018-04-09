import sortBy from 'lodash/sortBy'

export const getActorIndex = (result, name) => (
  result.findIndex(actor => actor.name === name)
)

export const addActor = (result, name, roles = []) => {
  result.push({ name, roles })
}

export const addCharacter = (result, name, idx) => {
  result[idx].roles.includes(name) || result[idx].roles.push(name)
}

export const validateActor = name => (
  name ? name : 'Unknown Actor'
)

export const getCharactersByActors = movies => {
  let charactersByActors = []
  const sortedByMovie = sortBy(movies, 'name')

  const getCharacters = role => {
    const actor = validateActor(role.actor)
    let idx = getActorIndex(charactersByActors, actor)

    if (idx === -1) {
      addActor(charactersByActors, actor)
      idx = charactersByActors.length - 1
    }
    addCharacter(charactersByActors, role.name, idx)
  }

  const groupByActor = movie => {
    movie.roles.forEach(getCharacters)
  }

  sortedByMovie.forEach(groupByActor)

  return sortBy(charactersByActors, 'name')
}
