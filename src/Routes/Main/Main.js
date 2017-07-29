import React, { Component } from 'react';
import styles from './Main.scss';
import SearchForm from '../../Components/SearchForm/SearchForm';
import MainMovie from '../../Components/MainMovie/MainMovie';
import MovieAPIService from '../../Services/MovieAPIService';
import Results from '../../Components/Results/Results';

/**
 * Main route
 *
 * @class Main
 * @extends {Component}
 */
class Main extends Component {
  /**
   * Creates an instance of Main.
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: [],
      mainMovie: {},
      searchResults: [],
      searchWord: ''
    };

    // binding to avoid re-creating an arrow function in every rendering
    this.setSearchResults = this.setSearchResults.bind(this);
  }

  /**
   * Called when the user searches for a movie
   *
   * @param {object} { searchResults, searchWord }
   */
  async setSearchResults({ searchResults, searchWord }) {
    searchResults = await MovieAPIService.mapGenres(searchResults);
    this.setState({ searchResults, searchWord });
  }

  /**
   * Fetch latest movies on route mounting
   */
  async componentWillMount() {
    let nowPlaying = await MovieAPIService.getNowPlaying();
    nowPlaying = nowPlaying.results.filter(
      movie => !movie.adult && movie.poster_path
    );
    // Choose randomly a movie from the latest to use as the main
    const mainIndex = Math.floor(Math.random() * nowPlaying.length);
    const mainMovie = nowPlaying.splice(mainIndex, 1)[0];

    // Map genre ids with genre strings for every movie
    nowPlaying = await MovieAPIService.mapGenres(nowPlaying);

    // Display something as soon as possible
    this.setState({ nowPlaying: nowPlaying.slice(0, 12) });

    // Fetch the info for the main displayed movie
    const data = await Promise.all([
      MovieAPIService.getHeroImage(mainMovie.id),
      MovieAPIService.getGenresStrings(mainMovie.genre_ids)
    ]);
    mainMovie.heroImage = data[0];
    mainMovie.genres = data[1];
    // Re-update the state
    this.setState({ mainMovie });
  }

  /**
   * Render Main Route
   *
   * @returns {JSX.Element}
   */
  render() {
    const { mainMovie, nowPlaying, searchResults } = this.state;
    const hasResults = Boolean(searchResults.length);
    const title = hasResults ? 'Results' : 'Latest Movies';
    const results = hasResults ? searchResults : nowPlaying;

    return (
      <div className="something">
        <MainMovie {...mainMovie} />
        <SearchForm onSearch={this.setSearchResults} />
        <Results movies={results} />
      </div>
    );
  }
}

export default Main;
