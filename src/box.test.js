import React from 'react';
import { Box, propTypes, propsMap } from './box';
import { shallow, mount } from 'enzyme';
import styled from 'styled-components';
import PropType from 'prop-types';

describe('Box', () => {
  it('default render', () => {
    const Component = mount(<Box />);
    expect(Component).toMatchSnapshot();
  });

  it('should pass all valid props not used for styling', () => {
    const Component = mount(
      <Box
        aria-label="Close"
        style={{backgroundColor: 'red'}}
        data-test="id"
      />
    ).html();
    expect(Component).toMatch(/style="background-color: red;"/);
    expect(Component).toMatch(/data-test="id"/);
    expect(Component).toMatch(/aria-label="Close"/);
  });

  it('should pass event handlers', () => {
    const handleClick = jest.fn();
    const Component = mount(<Box onClick={handleClick} />);

    expect(Component).toMatchSnapshot();
  });

  it('should react to passed event handler', () => {
    const handleClick = jest.fn();
    const Component = mount(<Box onClick={handleClick} />);
    Component.simulate('click');

    expect(handleClick).toBeCalled();
  });

  it('propsMap and propTypes have matching keys', () => {
    expect(Object.keys(propsMap)).toEqual(expect.arrayContaining(Object.keys(propTypes)));
    expect(Object.keys(propTypes)).toEqual(expect.arrayContaining(Object.keys(propsMap)));
  });

});

