import React, { PureComponent } from 'react';
import Stars from '../Stars/Stars';
import PropTypes from 'prop-types';
import styles from './MainMovie.scss';

/**
 * MainMovie Component display at the top
 *
 * @export
 * @class MainMovie
 * @extends {Component}
 */
export default class MainMovie extends PureComponent {
  /**
   * Component Interface
   *
   * @static
   */
  static propTypes = {
    heroImage: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
  };

  static defaultProps = {
    genres: []
  };

  /**
   * Render main movie
   *
   * @returns {JSX.Element}
   */
  render() {
    const {
      heroImage,
      release_date,
      vote_average,
      genres,
      overview
    } = this.props;
    return (
      <div className={styles.mainImageWrapper}>
        <div
          className={styles.mainImage}
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className={styles.mainImageContent}>
          <time>
            {release_date}
          </time>
          <h1 className={styles.mainTitle}>
            {this.props.title}
          </h1>
          <Stars rating={vote_average} />
          <span className={styles.genreContainer}>
            {genres.map(genre =>
              <span className={styles.genre} key={genre}>
                {genre}
              </span>
            )}
          </span>
          <p
            className={`no-padding overview cute-6-laptop cute-6-tablet cute-12-phone ${styles.overview}`}
          >
            {overview}
          </p>
        </div>
      </div>
    );
  }
}
