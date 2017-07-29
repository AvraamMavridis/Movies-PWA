import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.scss';

/**
 * Rating Stars Component
 *
 * @class Stars
 * @extends {PureComponent}
 */
export default class Stars extends PureComponent {
  /**
   * Component interface
   */
  static propTypes = {
    // movie score
    rating: PropTypes.number,
    // optional styling class
    className: PropTypes.string
  };

  static defaultProps = {
    rating: 0,
    className: ''
  };

  /**
   * Renders Component
   *
   * @returns {JSX.Element}
   */
  render() {
    let { rating, className } = this.props;
    const flooredRating = Math.floor(rating);
    return (
      <span className={`${styles.starsContainer} ${className}`}>
        {Array.apply(Array, { length: 10 }).map((v, i) => {
          return (
            <svg key={i} height="25" width="23" className="star rating">
              <polygon
                points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                fill={i + 1 <= flooredRating ? 'yellow' : 'grey'}
              />
            </svg>
          );
        })}
        <span className={styles.rating}>
          {rating}/10
        </span>
      </span>
    );
  }
}
