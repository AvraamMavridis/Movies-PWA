import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { createImageUrl } from '../../Helpers/Helpers';
import styles from './Cast.scss';

/**
 * Cast Component
 *
 * @class Cast
 * @extends {PureComponent}
 */
export default class Cast extends PureComponent {
  /**
   * Component interface
   *
   * @static
   */
  static propTypes = {
    cast: PropTypes.array
  };

  static defaultProps = {
    cast: []
  };
  /**
   * Render Casting
   *
   * @returns {JSX.Element}
   */
  render() {
    let { cast } = this.props;
    cast = cast.filter(actr => Boolean(actr.profile_path)).map(actr => {
      actr.image = createImageUrl(actr.profile_path);
      return actr;
    });

    return (
      <div className={styles.castWrapper}>
        <h2 className={styles.title}>Cast</h2>
        <div className="cute-12-laptop">
          {cast.map(ctr =>
            <span key={ctr.id} className="actor cute-3-laptop cute-6-phone">
              <div
                className={styles.actorImage}
                style={{ backgroundImage: `url(${ctr.image})` }}
              />
              <div className={styles.actorName}>
                {ctr.name}
              </div>
            </span>
          )}
        </div>
      </div>
    );
  }
}
