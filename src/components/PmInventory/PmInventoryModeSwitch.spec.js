import React from 'react'
import { shallow } from 'enzyme'
import PmInventoryModeSwitch from './PmInventoryModeSwitch'
import { Provider } from 'react-redux'
import { store } from 'rx/store'

const defaultProps = {
  userContext: {
    userType: 'chef'
  },
}
const setup = (partialProps) => {
  const props = {
    ...defaultProps,
    ...partialProps,
  }
  const wrapper = shallow(
    <Provider store={ store } >
      <PmInventoryModeSwitch />
    </Provider>
  )
  return { wrapper, props }
}

describe('<PmInventoryModeSwitch /> component', () => {
  it('renders component with props', () => {
    const wrapper = setup({
      userContext: {
        userType: 'storekeeper'
      },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
