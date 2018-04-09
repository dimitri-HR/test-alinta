import React from 'react'
import renderer from 'react-test-renderer'

import ActorList from '.'

const mockActors = [
  {
    name: 'Actor1',
    roles: ['Character1', 'Character2'],
  },
  {
    name: 'Actor2',
    roles: ['Character3', 'Character4'],
  },
]

describe('ActorList', () => {
  it('renders without errors', () => {
    const component = renderer.create(<ActorList actors={mockActors}/>)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
