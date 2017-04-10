import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import {Cloud, Word} from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <Cloud
        width={500}
        height={500}><div/></Cloud>
    , div)
})

it('renders text node', () => {
    const wrapper = shallow(
        <Cloud
        width={500}
        height={500}><text>hi</text></Cloud>
    )
    const text = <text>hi</text>
    expect(wrapper.contains(text)).toEqual(true)
})