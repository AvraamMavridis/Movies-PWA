import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.scss';

class Stars extends Component {
  render() {
    let { rating } = this.props;
    const flooredRating = Math.floor(rating);
    return (
      <span className={styles.starsContainer}>
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
        <span>
          {rating}/10
        </span>
      </span>
    );
  }
}

Stars.propTypes = {};

export default Stars;
