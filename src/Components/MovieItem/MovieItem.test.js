import React from 'react';
import { mount } from 'enzyme';
import MovieItem from './MovieItem';

jest.mock('react-router-dom', () => ({
  Link: props => {
    return (
      <a>
        {props.children}
      </a>
    );
  }
}));

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

const movieItemMock2 = {
  vote_count: 834,
  id: 324852,
  video: false,
  vote_average: 6.2,
  name: 'Something Else',
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
describe('<MovieItem /> tests', () => {
  it('should render an img and a title', () => {
    wrapper = mount(<MovieItem {...movieItemMock1} />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h4').text()).toBe(movieItemMock1.title);
  });

  it('should render an img and a name (for tv-series)', () => {
    wrapper = mount(<MovieItem {...movieItemMock2} />);
    expect(wrapper.find('img').length).toBe(1);
    expect(wrapper.find('h4').text()).toBe(movieItemMock2.name);
  });
});
