import React from 'react';
import { mount } from 'enzyme';
import Stars from './Stars';

let wrapper;
describe('<Stars /> tests', () => {
  beforeEach(() => {
    wrapper = mount(<Stars rating={6.7} />);
  });

  it('should have the right amount of stars', () => {
    expect(wrapper.find('svg').length).toBe(10);
    expect(wrapper.find('[fill="yellow"]').length).toBe(6);
    expect(wrapper.find('[fill="grey"]').length).toBe(4);
  });

  it('should render the numeric value of the rating', () => {
    expect(wrapper.find('span').at(1).text()).toBe('6.7/10');
  });

  it('should use the passing className', () => {
    wrapper = mount(<Stars rating={6.7} className="test" />);
    expect(wrapper.find('.test').length).toBe(1);
  });
});
