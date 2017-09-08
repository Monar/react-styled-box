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

propType | sample values | description
--- | --- | ---
display | "flex", "block" | **flex** - default value
margin | 10, "50%" | number values are suffixed with **px**
padding | 10, "50%" | number values are suffixed with **px**
width | 10, "50%" | number values are suffixed with **px**
maxWidth |10, "50%" | number values are suffixed with **px**
minWidth |10, "50%" | number values are suffixed with **px**
height | 10, "50%" | number values are suffixed with **px**
maxHeight | 10, "50%" | number values are suffixed with **px**
minHeight | 10, "50%" | number values are suffixed with **px**
flexDirection | "row", "column" |
flexWrap | "nowrap", "wrap" |
flexFlow | "column nowrap", "row wrap" |
justifyContent | "flex-start", "center" |
alignItems | "base-line", "flex-start" |
alignContent | "flex-start", "space-around" |
order | 1, 2 |
flexGrow | 1, 2 |
flexShrink | 1, 0 |
flexBasis | 30, "auto", "30%" | number values are suffixed with **px**
flex | "0 1 auto", "1 0" |
alignSelf | "auto", "flex-start" |
