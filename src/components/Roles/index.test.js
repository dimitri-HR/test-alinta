import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'

import Roles from '.'

describe('Roles', () => {
  it('renders without errors', () => {
    const component = renderer.create(<Roles />)

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('renders correct number of roles', () => {
    const mockRoles = ['Character1', 'Character2']

    const component = mount(
      <Roles roles={mockRoles}/>
    )

    expect(component.find('li').length).toBe(2)
  })
})
