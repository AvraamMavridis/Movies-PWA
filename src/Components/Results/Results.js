import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Results.scss';
import MovieItem from '../MovieItem/MovieItem';

/**
 * Result component renders the search results
 *
 * @class Results
 * @extends {PureComponent}
 */
class Results extends PureComponent {
  /**
   * Component interface
   *
   * @static
   */
  static propTypes = {
    movies: PropTypes.array,
    title: PropTypes.string
  };

  static defaultProps = {
    movies: [],
    title: ''
  };

  /**
   * Renders results
   *
   * @returns {JSX.Element}
   */
  render() {
    const { movies, title } = this.props;
    return (
      <div className={styles.resultsWrapper}>
        <h1 className={styles.resultsTitle}>
          {title}
        </h1>
        <div className="cute-10-laptop cute-1-laptop-offset">
          {movies.map(movie => {
            return <MovieItem key={movie.id} {...movie} />;
          })}
        </div>
      </div>
    );
  }
}

export default Results;
