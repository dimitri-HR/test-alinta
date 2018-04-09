import React from 'react'
import renderer from 'react-test-renderer'

import Actor from '.'

const mockActor = {
  name: 'Actor',
  roles: [],
}

describe('Actor', () => {
  it('renders without errors', () => {
    const component = renderer.create(<Actor actor={mockActor}/>)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
