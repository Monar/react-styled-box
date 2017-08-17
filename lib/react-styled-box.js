(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('styled-components'), require('prop-types')) :
	typeof define === 'function' && define.amd ? define(['exports', 'styled-components', 'prop-types'], factory) :
	(factory((global.window = global.window || {}),global.styled,global.PropTypes));
}(this, (function (exports,styled,PropTypes) { 'use strict';

styled = styled && 'default' in styled ? styled['default'] : styled;
PropTypes = PropTypes && 'default' in PropTypes ? PropTypes['default'] : PropTypes;

function toCss(props, propTypes, propsMap) {
  return Object.keys(propTypes).filter(function (k) {
    return props[k];
  }).map(function (k) {
    return propsMap[k].name + ': ' + propsMap[k].apply(props[k]) + ';';
  }).join('');
}

function Flex(validator) {
  return function (props, propName, componentName) {
    if (process.env.NODE_ENV !== 'production') {
      if (!props[propName]) {
        return null;
      }

      if (props['display'] !== 'flex' && props['display'] !== 'inline-flex') {
        return new Error('The property "' + propName + '" in ' + componentName + ' is available only when is display={/flex|inline-flex/}.');
      }

      for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return validator.apply(undefined, [props, propName, componentName].concat(rest));
    }

    return null;
  };
}

function ind(p) {
  return p;
}

function defaultPx(prop) {
  return typeof prop === 'number' ? prop + 'px' : prop;
}

var _templateObject = _taggedTemplateLiteral(['\n', '\n'], ['\n', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var propsMap = {
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
  alignSelf: { name: 'align-self', apply: ind }
};

var propTypes = {
  display: PropTypes.oneOf(['block', 'inline-block', 'inline', 'flex', 'inline-flex']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  flexDirection: Flex(PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse'])),
  flexWrap: Flex(PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse'])),
  justifyContent: Flex(PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'])),
  alignItems: Flex(PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch'])),
  alignContent: Flex(PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch'])),
  order: Flex(PropTypes.number),
  flex: Flex(PropTypes.string),
  alignSelf: Flex(PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch']))
};

var Box = styled.div(_templateObject, function (props) {
  return toCss(props, propTypes, propsMap);
});
Box.displayName = 'Box';
Box.propTypes = propTypes;
Box.defaultProps = {
  display: 'flex'
};

exports.Box = Box;
exports['default'] = Box;

Object.defineProperty(exports, '__esModule', { value: true });

})));
