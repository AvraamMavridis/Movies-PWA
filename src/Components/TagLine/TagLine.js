import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './TagLine.scss';

/**
 * Tag Line Component
 *
 * @export
 * @class TagLine
 * @extends {PureComponent}
 */
export default class TagLine extends PureComponent {
  /**
   * Component interface
   *
   * @static
   */
  static propTypes = {
    tagline: PropTypes.string
  };

  static defaultProps = {
    tagline: ''
  };

  /**
   * Render tagline
   *
   * @returns {JSX.Element}
   */
  render() {
    const { tagline } = this.props;

    return (
      <div className={styles.tagline}>
        {tagline}
      </div>
    );
  }
}
