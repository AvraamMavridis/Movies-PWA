import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './LatestMovies.scss';

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

class LatestMovies extends Component {
  render() {
    const { nowPlaying } = this.props;
    return (
      <div>
      <h1 className={styles.latestMoviesTitle}>Latest Movies</h1>
      <div className={styles.latestMoviesContainer}>

        {nowPlaying.map(movie => {
          return (
            <div className={styles.moviePoster} key={movie.title}>
            <img
              src={ `${imageUrl}${movie.poster_path}`}
            />
            </div>);
        })}
      </div>
      </div>
    );
  }
}

export default LatestMovies;
