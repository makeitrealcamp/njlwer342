import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders one h1 tag', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('h1').length).toBe(1);
});

it('renders one p tag', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('p').length).toBe(1);
});

it('rendered the h1 with correct text', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('h1').text()).toBe('Mi primera aplicación')
});

it('rendered the p tag with correct text', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('p').text()).toBe('Esta es mi primera aplicación en React, está padrísimo!')
});

