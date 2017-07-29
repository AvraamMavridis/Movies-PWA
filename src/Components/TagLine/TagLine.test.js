import React from 'react';
import { mount } from 'enzyme';
import TagLine from './TagLine';

let wrapper;
describe('<MainMovie/> tests', () => {
  beforeEach(() => {
    wrapper = mount(<TagLine tagline="test" />);
  });

  it('should render the tagline of a movie', () => {
    expect(wrapper.find('div').text()).toBe('test');
  });
});
