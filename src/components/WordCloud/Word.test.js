import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Word from './Word'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <Word
        x={10} y={10}
        fontSize={20}
        fontFamily="Arial"
        color="rebeccapurple">Topic</Word>
    , div)
})

it('renders text node', () => {
  const wrapper = shallow(
      <Word
        x={10} y={10}
        fontSize={20}
        fontFamily="Arial"
        color="rebeccapurple">Topic</Word>)
  const word = 'Topic'
  expect(wrapper.contains(word)).toEqual(true)
})