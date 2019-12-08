import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home'

const setup = () => {
  const wrapper = shallow(<Home />)
  return { wrapper }
}

describe('<Home /> component', () => {
  it('renders component', () => {
    const wrapper = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
