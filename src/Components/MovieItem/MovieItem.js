import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieItem.scss';
import Stars from '../Stars/Stars';
import MovieAPIService from '../../Services/MovieAPIService';
import { Link } from 'react-router-dom';
import { createImageUrl } from '../../Helpers/Helpers';

/**
 * Movie list item
 *
 * @export
 * @class MovieItem
 * @extends {PureComponent}
 */
export default class MovieItem extends PureComponent {
  /**
   * Component interface
   *
   * @static
   */
  static propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    genres: PropTypes.array,
    id: PropTypes.number
  };

  /**
   * Render Movie Item
   *
   * @returns
   */
  render() {
    const { poster_path, title, name, vote_average, genres, id } = this.props;
    const posterImage = createImageUrl(poster_path, 'w500');

    return (
      <Link
        to={`/movie/${id}`}
        className={`${styles.moviePoster} cute-3-laptop cute-6-tablet`}
      >
        <img src={posterImage} />
        <div className={styles.movieInfoContainer}>
          <h4>
            {title || name}
          </h4>
          <h5 className={styles.rating}>
            <svg height="25" width="23" className="star rating">
              <polygon
                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                fill="#29262D"
              />
            </svg>
            <div />
            {vote_average}
          </h5>
          <div className="mainGenre">
            {genres[0]}
          </div>
        </div>
      </Link>
    );
  }
}
