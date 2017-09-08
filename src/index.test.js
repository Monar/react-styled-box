import React from 'react';
import { Box } from './index';
import { shallow } from 'enzyme';

describe('Box', () => {
  it('default render', () => {
    const Component = shallow(<Box/>);
    expect(Component).toMatchSnapshot();
  });
});
