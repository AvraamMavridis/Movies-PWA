const APIEndPoint = 'https://api.themoviedb.org/3/search/multi?api_key=4b961a668279701f1f9b054ba679c799&language=en-US&query=';

const NowPlayingEndPoint = 'https://api.themoviedb.org/3/movie/now_playing?api_key=4b961a668279701f1f9b054ba679c799&language=en-US&page=1';
import Rx from 'rxjs/Rx';
import { err } from '../Helpers/Helpers';

/**
 * Search for a movie
 *
 * @class MovieAPIService
 */
export default class MovieAPIService {
  /**
   * Search for movie, tv-series or person
   *
   * @static
   * @param {string} [name=err('search term is mandatory')]
   * @returns {promise}
   */
  static async multiSearch(name = err('search term is mandatory'), page = 1) {
    const request = await fetch(`${APIEndPoint}${name}`);
    const data = await request.json();
    return data;
  }

  /**
   * Returns the movies that are now playing on the theaters
   *
   * @static
   * @returns {promise}
   */
  static async getNowPlaying(){
    const request = await fetch(NowPlayingEndPoint);
    const data = await request.json();
    return data;
  }
}