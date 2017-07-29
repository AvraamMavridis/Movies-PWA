import React from 'react';
import { mount } from 'enzyme';
import MainMovie from './MainMovie';
import Stars from '../Stars/Stars';

const movieItemMock1 = {
  vote_count: 834,
  id: 324852,
  video: false,
  vote_average: 6.2,
  title: 'Despicable Me 3',
  popularity: 114.700001,
  poster_path: '/5qcUGqWoWhEsoQwNUrtf3y3fcWn.jpg',
  original_language: 'en',
  original_title: 'Despicable Me 3',
  genre_ids: [878, 12, 16, 35, 10751],
  backdrop_path: '/puV2PFq42VQPItaygizgag8jrXa.jpg',
  adult: false,
  overview:
    "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
  release_date: '2017-06-29',
  genres: ['Science Fiction', 'Adventure', 'Animation', 'Comedy', 'Family']
};

let wrapper;
describe('<MainMovie/> tests', () => {
  beforeEach(() => {
    wrapper = mount(<MainMovie {...movieItemMock1} />);
  });

  it('should render a <Stars /> component to display ratings', () => {
    expect(wrapper.find(Stars).length).toBe(1);
  });

  it('should render a <time /> element to display the release date', () => {
    expect(wrapper.find('time').length).toBe(1);
    expect(wrapper.find('time').text()).toBe(movieItemMock1.release_date);
  });
});
