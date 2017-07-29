import React from 'react';
import { mount } from 'enzyme';
import Cast from './Cast';

const mockCast = [
  {
    cast_id: 0,
    character: 'Wonder Woman / Diana Prince',
    credit_id: '543ff227c3a3680544000009',
    gender: 1,
    id: 90633,
    name: 'Gal Gadot',
    order: 0,
    profile_path: '/h299BeSGjgjlhmLyRVJ0vrefhK.jpg',
    image: 'https://image.tmdb.org/t/p//w320/h299BeSGjgjlhmLyRVJ0vrefhK.jpg'
  },
  {
    cast_id: 9,
    character: 'Steve Trevor',
    credit_id: '55b8881392514123df00139f',
    gender: 2,
    id: 62064,
    name: 'Chris Pine',
    order: 1,
    profile_path: '/vSe6sIsdtcoqBhuWRXynahFg8Vf.jpg',
    image: 'https://image.tmdb.org/t/p//w320/vSe6sIsdtcoqBhuWRXynahFg8Vf.jpg'
  },
  {
    cast_id: 10,
    character: 'General Antiope',
    credit_id: '5685eeefc3a3684bcc01ef2d',
    gender: 1,
    id: 32,
    name: 'Robin Wright',
    order: 2,
    profile_path: '/cke0NNZP4lHRtOethRy2XGSOp3E.jpg',
    image: 'https://image.tmdb.org/t/p//w320/cke0NNZP4lHRtOethRy2XGSOp3E.jpg'
  }
];

let wrapper;
describe('Cast tests', () => {
  it('should render a list with cast', () => {
    wrapper = mount(<Cast cast={mockCast} />);
    expect(wrapper.find('.actor').length).toBe(3);
  });
});
