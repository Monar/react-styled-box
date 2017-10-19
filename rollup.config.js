import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/react-styled-box.js',
    format: 'es',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  globals: {
    'styled-components': 'styled',
    'prop-types': 'PropTypes',
  },
  external: ['styled-components', 'prop-types'],
};
