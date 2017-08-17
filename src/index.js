import styled from 'styled-components';
import PropTypes from 'prop-types';

import { toCss, Flex, ind, defaultPx } from './helpers';


const propsMap = {
  display: { name: 'display', apply: ind },
  margin: { name: 'margin', apply: defaultPx },
  padding: { name: 'padding', apply: defaultPx },
  width: { name: 'width', apply: defaultPx },
  height: { name: 'height', apply: defaultPx },
  flexDirection: { name: 'flex-direction', apply: ind },
  flexWrap: { name: 'flex-wrap', apply: ind },
  justifyContent: { name: 'justify-content', apply: ind },
  alignItems: { name: 'align-items', apply: ind },
  alignContent: { name: 'align-content', apply: ind },
  order: { name: 'order', apply: ind },
  flexGrow: { name: 'flex-grow', apply: ind },
  flexShrink: { name: 'flex-shrink', apply: ind },
  flexBasis: { name: 'flex-basis', apply: ind },
  flex: { name: 'flex', apply: ind },
  alignSelf: { name: 'align-self', apply: ind },
};

const propTypes = {
  display: PropTypes.oneOf(['block', 'inline-block', 'inline', 'flex', 'inline-flex']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexDirection: Flex(PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse'])),
  flexWrap: Flex(PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse'])),
  justifyContent: Flex(PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])),
  alignItems: Flex(PropTypes.oneOf(['flex-start', 'flex-end',  'center', 'baseline', 'stretch'])),
  alignContent: Flex(PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'])),
  order: Flex(PropTypes.number),
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
