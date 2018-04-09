import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import PageContainer from '.'

describe('PageContainer', () => {
  it('renders without errors', () => {
      const component = renderer.create(
      <PageContainer>
        <div>Children</div>
      </PageContainer>
    )
    expect(component.toJSON()).toMatchSnapshot()
  })

  it('can pass correct className', () => {
      const component = shallow(
      <PageContainer className='testClass'>
        <div>Children</div>
      </PageContainer>
    )
    expect(component.find('div').first().hasClass('testClass')).toBe(true)
  })
})
