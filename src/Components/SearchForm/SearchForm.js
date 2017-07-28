import React, { Component } from 'react';
import styles from './SearchForm.scss';
import Rx from 'rxjs/Rx';
import MovieAPIService from '../../Services/MovieAPIService';
import SearchFormItem from '../SearchFormItem/SearchFormItem';

class SearchForm extends Component {

  componentDidMount() {
    const keyInput$ = Rx.Observable.fromEvent(this.searchInput, 'keyup');

    keyInput$
      .filter(e => !Boolean(e.target.value))
      .subscribe(() => this.props.onSearch([]));

    keyInput$
      .debounceTime(500)
      .map(event => event.target.value) // take the last value
      .filter(Boolean) // filter the empty '' (after backspace)
      .distinctUntilChanged() // take only the value if changed
      .flatMap(MovieAPIService.multiSearch) // unroll promise
      .subscribe(data =>
        this.props.onSearch(data.results.filter(result => result.poster_path).slice(0,12) || [])
      );
  }

  render() {
    return (
      <div className={styles.searchForm}>
        <input
          ref={searchInput => (this.searchInput = searchInput)}
          name
          id="input"
          type="text"
          className={styles.search}
          placeholder="Country"
        />
      </div>
    );
  }
}

export default SearchForm;
