export function toCss(props, propTypes, propsMap) {
  return Object.keys(propTypes)
    .filter((k) => props[k] )
    .map((k) => `${propsMap[k].name}: ${propsMap[k].apply(props[k])};`)
    .join('');
}

export function Flex(validator) {
  return function (props, propName, componentName, ...rest) {
    if (process.env.NODE_ENV !== 'production') {
      if (!props[propName]) {
        return null;
      }

      if (props['display'] !== 'flex' && props['display'] !== 'inline-flex'){
        return new Error(`The property "${propName}" in ${componentName} is available only when is display={/flex|inline-flex/}.`);
      }
      return validator(props, propName, componentName, ...rest);
    }

    return null;
  };
}

export function ind (p) { return p; }

export function defaultPx(prop) {
  return typeof prop === 'number' ? `${prop}px` : prop;
}
