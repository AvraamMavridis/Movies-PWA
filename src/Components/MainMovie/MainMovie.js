import React, { Component } from 'react';
import Stars from '../Stars/Stars';
import styles from './MainMovie.scss';

const imageUrl = 'https://image.tmdb.org/t/p/w500/'

export default class MainMovie extends Component {
  render() {
    const { backdrop_path, release_date, vote_average } = this.props;
    console.log(this.props);
    return (
      <div className={ styles.mainImageWrapper }>
      <div className={ styles.mainImage } style={{ backgroundImage: `url(${ imageUrl }${backdrop_path})`}}></div>
      <div className={ styles.mainImageContent }>
        <time>{ release_date }</time>
        <h1 className={ styles.mainTitle }>{ this.props.title }</h1>
        <Stars rating={ vote_average }/>
      </div>
      </div>
    );
  }
}