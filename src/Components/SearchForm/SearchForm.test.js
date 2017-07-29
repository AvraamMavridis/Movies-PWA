import React from 'react';
import { mount } from 'enzyme';
import SearchForm from './SearchForm';

let mockVal;

jest.mock('../../Services/MovieAPIService', () => ({
  multiSearch: () => {
    return mockVal;
  }
}));

let wrapper, onSearch;
describe('SearchForm tests', () => {
  beforeEach(() => {
    onSearch = jest.fn();
    wrapper = mount(<SearchForm onSearch={onSearch} />);
  });

  it('should have an input', () => {
    expect(wrapper.find('input').length).toBe(1);
  });

  it('should call the passed onSearch callback on input type when the input value becomes empty', done => {
    var e = document.createEvent('HTMLEvents');
    e.initEvent('keyup', false, true);
    wrapper.instance().keyInput$.sourceObj.dispatchEvent(e);

    setTimeout(function() {
      try {
        expect(onSearch).toHaveBeenCalled();
      } catch (e) {
        done.fail(e);
      } finally {
        done();
      }
    }, 550);
  });

  it('should call the passed onSearch callback on input type when the input has value', done => {
    mockVal = Promise.resolve({ results: [{ title: 'Ice Age' }] });
    wrapper.find('input').get(0).value = 'something';
    var e = document.createEvent('HTMLEvents');
    e.initEvent('keyup', false, true);
    wrapper.instance().keyInput$.sourceObj.dispatchEvent(e);

    setTimeout(function() {
      try {
        expect(onSearch).toHaveBeenCalled();
      } catch (e) {
        done.fail(e);
      } finally {
        done();
      }
    }, 550);
  });

  it('should cleanup on unmounting', () => {
    const mockDispose = jest.fn();
    wrapper.instance().subscriptions = [
      {
        unsubscribe: mockDispose
      }
    ];
    wrapper.instance().componentWillUnmount();
    expect(mockDispose).toHaveBeenCalled();
  });
});
