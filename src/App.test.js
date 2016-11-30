import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders one ul tag', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('ul').length).toBe(1);
});

it('renders four li tags', () => {
  const wrapper = render(<App />);
  expect(wrapper.find('li').length).toBe(4);
});

it('rendered the li with correct text', () => {
  const wrapper = shallow(<App />);
  const techs = ['Javascript', 'CSS', 'HTLM', 'React']
  expect(wrapper.find('li').length).toBe(4);
  wrapper.find('li').forEach(function(node, i) {
    expect(node.text()).toBe(techs[i]);
  });
});
