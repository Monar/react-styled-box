import { toCss, Flex, ind, defaultPx } from './helpers';

test('defaultPx', () => {
  expect(defaultPx(100)).toEqual('100px');
  expect(defaultPx('100')).toEqual('100');
});

test('toCss only props from propTypes, and apply name and mapping', () => {
  const props = { elo: 'hi', width: 100 };
  const mapper = (val) => `[${val}]`;
  const propTypes = { width: 'does not matter' };
  const propMap = { width: { name: 'width-name', apply: mapper } };

  const result = toCss(props, propTypes, propMap);

  expect(result).toEqual('width-name: [100];');
});

test('Flex should return null, not in props', () => {
  const props = { display: 'flex', flex: '1 0 0' };
  const propName = 'test';
  const componentName = 'Test';
  const validator = jest.fn();

  const test = Flex(validator);
  const result = test(props, propName, componentName);

  expect(result).toBeNull();
});

test('Flex should call validator', () => {
  const props = { display: 'flex', flex: '1 0 0' };
  const propName = 'flex';
  const componentName = 'Test';
  const rest = ['should', 'be', 'passed', 'by', 'spread'];
  const validator = jest.fn();

  const test = Flex(validator);

  const result = test(props, propName, componentName, ...rest);

  expect(validator).toBeCalledWith(
    props,
    propName,
    componentName,
    ...rest
  );
});

test('Flex return Error when display is not flex', () => {
  const props = { display: 'block', flex: '1 0 0' };
  const propName = 'flex';
  const componentName = 'Test';
  const validator = jest.fn();

  const test = Flex(validator);
  const result = test(props, propName, componentName)
  expect(result).toBeInstanceOf(Error);
});
