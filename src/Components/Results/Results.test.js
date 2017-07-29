import React from 'react';
import { mount } from 'enzyme';
import Results from './Results';
import MovieItem from '../MovieItem/MovieItem';

jest.mock('react-router-dom', () => ({
  Link: props => {
    return (
      <a>
        {props.children}
      </a>
    );
  }
}));

const moviesMock = [
  {
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
  },
  {
    vote_count: 508,
    id: 374720,
    video: false,
    vote_average: 7.6,
    title: 'Dunkirk',
    popularity: 83.575136,
    poster_path: '/cUqEgoP6kj8ykfNjJx3Tl5zHCcN.jpg',
    original_language: 'en',
    original_title: 'Dunkirk',
    genre_ids: [28, 18, 36, 53, 10752],
    backdrop_path: '/fudEG1VUWuOqleXv6NwCExK0VLy.jpg',
    adult: false,
    overview:
      'Miraculous evacuation of Allied soldiers from Belgium, Britain, Canada, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26 and June 04, 1940, during Battle of France in World War II.',
    release_date: '2017-07-19',
    genres: ['Action', 'Drama', 'History', 'Thriller', 'War']
  },
  {
    vote_count: 1613,
    id: 315635,
    video: false,
    vote_average: 7.4,
    title: 'Spider-Man: Homecoming',
    popularity: 82.928987,
    poster_path: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
    original_language: 'en',
    original_title: 'Spider-Man: Homecoming',
    genre_ids: [28, 12, 878],
    backdrop_path: '/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg',
    adult: false,
    overview:
      'Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.',
    release_date: '2017-07-05',
    genres: ['Action', 'Adventure', 'Science Fiction']
  }
];

let wrapper;
describe('<Results/> tests', () => {
  beforeEach(() => {
    wrapper = mount(<Results movies={moviesMock} title={'test'} />);
  });

  it('should render the right amount of <MovieItems />', () => {
    expect(wrapper.find(MovieItem).length).toBe(3);
  });

  it('should render the correct title', () => {
    expect(wrapper.find('h1').text()).toBe('test');
  });
});
