[![npm version](https://badge.fury.io/js/react-styled-box.svg)](https://badge.fury.io/js/react-styled-box)

# react-styled-box

#### What is it ?

This is a simple [styled.div](https://github.com/styled-components/styled-components) component, that makes your basic positioning of
elements faster.  Instead of writing all of the "styled" components upfront you
can prototype the layout faster with this ready `<Box>`.

#### How it works ?

```jsx
import Box from 'react-styled-box';

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
Check [A Complete Guide to FlexBox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

propType | valid types | sample values | description
--- | --- | --- | ---
`display` | string | `'flex'`, `'block'` | **flex** - default value
`margin` | integer, string |`10`, `'50%'` | number values are suffixed with **px**
`padding` | integer, string | `10`, `'50%'` | number values are suffixed with **px**
`width` | integer, string | `10`, `'50%'` | number values are suffixed with **px**
`maxWidth` | integer, string |`10`, `'50%'` | number values are suffixed with **px**
`minWidth` | integer, string |`10`, `'50%'` | number values are suffixed with **px**
`height` | integer, string | `10`, `'50%'` | number values are suffixed with **px**
`maxHeight` | integer, string | `10`, `'50%'` | number values are suffixed with **px**
`minHeight` | integer, string | `10`, `'50%'` | number values are suffixed with **px**
`flexDirection` | string | `'row'`, `'column'` |
`flexWrap` | string | `'nowrap'`, `'wrap'` |
`flexFlow` | string | `'column nowrap'`, `'row wrap'` |
`justifyContent` | string | `'flex-start'`, `'center'` |
`alignItems` | string | `'base-line'`, `'flex-start'` |
`alignContent` | string | `'flex-start'`, `'space-around'` |
`order` | integer | `1`, `2` |
`flexGrow` | integer | `1`, `2` |
`flexShrink` | integer | `1`, `0` |
`flexBasis` | integer, string | `30`, `'auto'`, `'30%'` | number values are suffixed with **px**
`flex` | string | `'0 1 auto'`, `'1 0'` |
`alignSelf` | string | `'auto'`, `'flex-start'` |
`overflow` | string | `visible`, `hidden` |
`overflowX` | string | `visible`, `hidden` |
`overflowY` | string | `visible`, `hidden` |
