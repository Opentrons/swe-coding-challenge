import React from 'react'
import { shallow } from 'enzyme'

import App from '../App'

it('component renders', () => {
  const tree = shallow(<App />)
  expect(tree).toMatchSnapshot()
})
