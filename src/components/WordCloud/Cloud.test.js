import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import {Cloud, Word} from './'

const wrapper = shallow(
    <Cloud width={500} height={500}><text /></Cloud>
)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <Cloud
        width={500}
        height={500}><text/></Cloud>
    , div)
})

it('to render child', () => {
    expect(wrapper.contains(<text />)).toBe(true)
})

it('to have width and height props', () => {
    expect(wrapper.prop('width')).toBe(500)
    expect(wrapper.prop('height')).toBe(500)
})

it('to have group transform prop equal to 50% width, height', () => {
    expect(wrapper.find('g').prop('transform')).toBe('translate(250, 250)')
    
})