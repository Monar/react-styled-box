import styled from 'styled-components';
import PropTypes from 'prop-types';

import { toCss, Flex, ind, defaultPx } from './helpers';


export const propsMap = {
  display: { name: 'display', apply: ind },
  margin: { name: 'margin', apply: defaultPx },
  padding: { name: 'padding', apply: defaultPx },
  width: { name: 'width', apply: defaultPx },
  maxWidth: { name: 'max-width', apply: defaultPx },
  minWidth: { name: 'min-width', apply: defaultPx },
  height: { name: 'height', apply: defaultPx },
  maxHeight: { name: 'max-height', apply: defaultPx },
  minHeight: { name: 'min-height', apply: defaultPx },
  flexDirection: { name: 'flex-direction', apply: ind },
  flexWrap: { name: 'flex-wrap', apply: ind },
  flexFlow: { name: 'flex-flow', apply: ind },
  justifyContent: { name: 'justify-content', apply: ind },
  alignItems: { name: 'align-items', apply: ind },
  alignContent: { name: 'align-content', apply: ind },
  order: { name: 'order', apply: ind },
  flexGrow: { name: 'flex-grow', apply: ind },
  flexShrink: { name: 'flex-shrink', apply: ind },
  flexBasis: { name: 'flex-basis', apply: defaultPx },
  flex: { name: 'flex', apply: ind },
  alignSelf: { name: 'align-self', apply: ind },
};

export const flexDirectionValues = ['row', 'row-reverse', 'column', 'column-reverse'];
export const flexWrapValues = ['nowrap', 'wrap', 'wrap-reverse'];
export const flexFlowValues = flexDirectionValues
  .map((direction) => flexWrapValues.map((wrap) => `${direction} ${wrap}`))
  .reduce((acc, val) => acc.concat(val), []);

export const propTypes = {
  display: PropTypes.oneOf(['block', 'inline-block', 'inline', 'flex', 'inline-flex']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  minHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexDirection: Flex(PropTypes.oneOf(flexDirectionValues)),
  flexWrap: Flex(PropTypes.oneOf(flexWrapValues)),
  flexFlow: Flex(PropTypes.oneOf(flexFlowValues)),
  justifyContent: Flex(PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])),
  alignItems: Flex(PropTypes.oneOf(['flex-start', 'flex-end',  'center', 'baseline', 'stretch'])),
  alignContent: Flex(PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'])),
  order: Flex(PropTypes.number),
  flexGrow: Flex(PropTypes.number),
  flexShrink: Flex(PropTypes.number),
  flexBasis: Flex(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
  flex: Flex(PropTypes.string),
  alignSelf: Flex(PropTypes.oneOf(['auto', 'flex-start', 'flex-end',  'center', 'baseline', 'stretch'])),
};

export const Box = styled.div`
  ${(props) => toCss(props, propTypes, propsMap)}
`;
Box.displayName = 'Box';
Box.propTypes = propTypes;
Box.defaultProps = {
  display: 'flex',
};

export default Box;
