# react-styled-box

#### What is it ?

This is a simple `styled.div` component, that makes your basic positioning of elements faster. 
Instead of writing of all of the "styled" components upfront you can prototype the layout faster with this ready `<Box>`.

#### How it works ?

```js

<Box flexDirection="column">
  <Box flexDirection="row">
    <span> header </span>
    <span> header 2 </span>
  </Box>

  <Box flexGrow={1}>
    <Box margin={10} padding="10px 0 0 0">
      Item one
    </Box>
    <Box margin={10} padding="10px 0 0 0">
      Item two
    </Box>
  </Box>
</Box>

```

#### What does it support ?

```js
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
```
