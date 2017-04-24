import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Word from './Word';

const word = 'Topic';
const wordComponent = (
  <Word
    x={10}
    y={10}
    fontSize={20}
    fontFamily="Arial"
    color="rebeccapurple"
    onClick={() => {}}
  >
    {word}
  </Word>
);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(wordComponent, div);
});

const wrapper = shallow(wordComponent);

it('renders text node', () => {
  expect(wrapper.contains(word)).toEqual(true);
});

it('to have expected props', () => {
  expect(wrapper.prop('className')).toBe('c-text');
  expect(wrapper.prop('style')).toHaveProperty('fontSize', 20);
  expect(wrapper.prop('style')).toHaveProperty('fontFamily', 'Arial');
  expect(wrapper.prop('style')).toHaveProperty('fill', 'rebeccapurple');
  expect(wrapper.prop('transform')).toBe('translate(10, 10) rotate(0)');
  expect(wrapper.prop('textAnchor')).toBe('middle');
});

it('to be a text element', () => {
  expect(wrapper.matchesElement(<text>{word}</text>)).toEqual(true);
});
