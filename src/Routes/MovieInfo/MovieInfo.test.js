import React from 'react';
import { mount } from 'enzyme';
import MovieInfo from './MovieInfo';
import MainMovie from '../../Components/MainMovie/MainMovie';
import TagLine from '../../Components/TagLine/Tagline';
import Cast from '../../Components/Cast/Cast';

jest.mock('../../Services/MovieAPIService', () => ({
  getMovieDetails: () =>
    Promise.resolve({
      id: 1,
      title: 'Nice movie',
      genres: [{ name: 'Fantasy' }]
    }),
  getHeroImage: () => Promise.resolve('/path.jpg'),
  getMovieCredits: () => Promise.resolve([])
}));

let wrapper;
describe('<MainMovie/> tests', () => {
  beforeEach(() => {
    wrapper = mount(<MovieInfo match={{ params: { id: 1234 } }} />);
  });

  it('should have MainMovie, TagLine and Cast components', () => {
    expect(wrapper.find(MainMovie).length).toBe(1);
    expect(wrapper.find(TagLine).length).toBe(1);
    expect(wrapper.find(Cast).length).toBe(1);
  });

  it('should fetch data and update the state', () => {
    expect(wrapper.state()).toEqual({
      movie: {
        id: 1,
        title: 'Nice movie',
        genres: ['Fantasy'],
        heroImage: '/path.jpg',
        credits: []
      }
    });
  });
});
