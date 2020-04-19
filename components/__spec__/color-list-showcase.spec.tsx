import { shallow } from 'enzyme';
import * as React from 'react';

import ColorListShowcase from '../color-list-showcase';

it('renders the heading', () => {
  const wrapper = shallow(<ColorListShowcase />);
  expect(wrapper.contains(<span>Title</span>)).toEqual(true);
});
