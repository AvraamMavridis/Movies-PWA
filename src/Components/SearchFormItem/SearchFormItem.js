import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchFormItem.scss';

class SearchFormItem extends Component {
  render() {
    const { name, title, isSelected } = this.props;
    return (
      <li className={isSelected ? styles.selected : '' }>
        {name || title}
      </li>
    );
  }
}

export default SearchFormItem;
