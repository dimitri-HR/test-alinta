import React from 'react'
import renderer from 'react-test-renderer'

import App from '.'

describe('App', () => {
  it('renders without errors', () => {
    const component = renderer.create(<App />)

    expect(component.toJSON()).toMatchSnapshot()
  })
})
