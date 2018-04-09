import { addActor, getCharactersByActors } from '.'
import { data } from './mockData'

describe('Helper functions', () => {
  it('addActor', () => {
    let resultBefore = []
    const actorName = 'Actor'
    const resultAfter = [
      {
        name: actorName,
        roles: [],
      }
    ]

    addActor(resultBefore, actorName)
    expect(resultBefore).toEqual(resultAfter)
  })

  it('getCharactersByActors', () => {
    const mockActors = [
      {
        name: 'Eddie Murphy',
        roles: ['Axel Foley']
      },
      {
        name: 'Keifer Sutherland',
        roles: ['Ace Merrill', 'Dr Barry Wolfson']
      },
      {
        name: 'Mila Kunis',
        roles: ['Meg Griffin']
      },
      {
        name: 'Seth Green',
        roles: ['Chris Griffin', 'Luke Skywalker']
      },
      {
        name: 'Unknown Actor',
        roles: ['Mikey Tandino', 'Joe Swanson']
      }
    ]

    expect(getCharactersByActors(data)).toEqual(mockActors)
  })
})
