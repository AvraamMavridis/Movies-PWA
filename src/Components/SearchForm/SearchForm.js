import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchForm.scss';
import Rx from 'rxjs/Rx';
import MovieAPIService from '../../Services/MovieAPIService';

/**
 * Search Form Component
 *
 * @class SearchForm
 * @extends {PureComponent}
 */
export default class SearchForm extends PureComponent {
  /**
   * Component interface
   *
   * @static
   */
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  /**
   * Attach react listeners when component is mounted
   */
  componentDidMount() {
    this.keyInput$ = Rx.Observable.fromEvent(this.searchInput, 'keyup');

    // Immediately cleanup the search results when the input field becomes empty
    const empty$ = this.keyInput$
      .filter(e => !Boolean(e.target.value))
      .subscribe(() =>
        this.props.onSearch({ searchResults: [], searchWord: '' })
      );

    // Subscription for the case where the input field has value
    const input$ = this.keyInput$
      .debounceTime(500) // 500ms to not flood server with request on every keystroke
      .map(event => event.target.value) // take the last value
      .filter(Boolean) // filter the empty '' (e.g. after backspace)
      .distinctUntilChanged() // take value if changed (inside the 500ms time window) to avoid requests
      .flatMap(MovieAPIService.multiSearch) // unroll promise
      .catch(() => Rx.Observable.empty()) // continue listen after ajax error
      .subscribe(data => {
        this.props.onSearch({
          searchResults: data.results.filter(result => result.poster_path),
          searchWord: this.searchInput.value
        });
      });

    this.subscriptions = [empty$, input$];
  }

  /**
   * Cleanup on component unMounting
   */
  componentWillUnmount() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Render Search Input
   *
   * @returns {JSX.Element}
   */
  render() {
    return (
      <div className={styles.searchForm}>
        <input
          ref={searchInput => (this.searchInput = searchInput)}
          name
          id="input"
          type="text"
          className={styles.search}
          placeholder="Search movie or tv serie"
        />
      </div>
    );
  }
}
