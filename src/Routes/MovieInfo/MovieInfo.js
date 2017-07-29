import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieAPIService from '../../Services/MovieAPIService';
import MainMovie from '../../Components/MainMovie/MainMovie';
import TagLine from '../../Components/TagLine/Tagline';
import Cast from '../../Components/Cast/Cast';

/**
 * Movie Info Route
 *
 * @export
 * @class MovieInfo
 * @extends {Component}
 */
export default class MovieInfo extends Component {
  /**
   * Creates an instance of MovieInfo.
   * @param {any} props 
   */
  constructor(props) {
    super(props);
    this.state = {
      movie: {
        credits: []
      }
    };
  }

  /**
   * Load data on component will mount
   */
  async componentWillMount() {
    const movieID = this.props.match.params.id;
    // Fetch movie details
    const movie = await MovieAPIService.getMovieDetails(movieID);
    // Fetch hero and movie credits, the requests can be done in parallel
    const data = await Promise.all([
      MovieAPIService.getHeroImage(movieID),
      MovieAPIService.getMovieCredits(movieID)
    ]);
    movie.heroImage = data[0];
    movie.credits = data[1];
    movie.genres = movie.genres.map(gnr => gnr.name);
    this.setState({ movie });
  }

  /**
   * Render MovieInfo Route
   *
   * @returns {JSX.Element}
   */
  render() {
    const { movie } = this.state;
    return (
      <div>
        <MainMovie {...movie} />
        <TagLine tagline={movie.tagline} />
        <Cast cast={movie.credits.cast} />
      </div>
    );
  }
}
