import React, { Component } from 'react';
import styles from './Main.scss';
import SearchForm from '../../Components/SearchForm/SearchForm';
import MainMovie from '../../Components/MainMovie/MainMovie';
import MovieAPIService from '../../Services/MovieAPIService';
import LatestMovies from '../../Components/LatestMovies/LatestMovies';

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
      searchResults: []
    };

    this.setSearchResults = this.setSearchResults.bind(this);
  }

  setSearchResults(searchResults){
    this.setState({ searchResults })
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
    this.setState({ nowPlaying: nowPlaying.slice(0,12), mainMovie });
  }

  render() {
    const { mainMovie, nowPlaying, searchResults } = this.state;

    return (
      <span className="something">
        <MainMovie { ...mainMovie } />
        <SearchForm onSearch={ this.setSearchResults }/>
        <LatestMovies nowPlaying={ searchResults.length ? searchResults : nowPlaying } />
      </span>
    );
  }
}

export default Main;
